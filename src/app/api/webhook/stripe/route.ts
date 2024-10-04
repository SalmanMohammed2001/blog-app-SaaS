


import Stripe from "stripe";



import { NextResponse } from 'next/server';
import { buffer } from "node:stream/consumers";
import { supabaseAdmin } from "@/lib/supabase/admin";



const stripe = new Stripe("sk_test_51PQTK101P3LearWwaoznX75Dd2MhxQASadDvjbrrTpVbASwwex071C7zZl0P4WPHf2XRnACJNANrRt7wwdMaWtmz00AmF4T0Mr")


const endpointSecret: string ="whsec_1e7147aa5d23c105573d11aa6012010732e66a0ad67590509eff53d59825743f"

export async function POST(req: any) {
 
  const rawBody = await buffer(req.body)
  const signature = req.headers.get('stripe-signature');

  
  if (!signature) {
    return new Response(JSON.stringify({ error: 'Missing stripe-signature header' }), { status: 400 });
  }

  let event: Stripe.Event;

  try {
  
    event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);

    
    console.log('Event:', event);

    
    switch (event.type) {
      case 'invoice.payment_succeeded':
     

        const result=event.data.object;
     

        const end_date=new Date( result.lines.data[0].period.end * 1000).toISOString()

        const customer_id= result.customer as string

        const subscription_id= result.subscription as string

        const email=result.customer_email as string

    const error =  await    payment_succeeded(end_date,customer_id,subscription_id,email)
    

     if(error){
      console.log(error);
      return Response.json({error:error.message})
    }
        break;
      case 'customer.discount.deleted':
        const deleteSubscription =event.data.object;
        deleteSubscription.id

        console.log(deleteSubscription.id);
        
    const cancleerro=   await  onSubCancel(deleteSubscription.id)

    if(cancleerro){
      console.log(cancleerro);
      
      return Response.json({error:cancleerro.message})
    }

      // Add more cases as needed for different event types
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Return a success response
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    // Handle errors during event construction (e.g., invalid signature)
    console.error('Event construction error:', err.message);
    return new Response(JSON.stringify({ error: `Webhook Error: ${err.message}` }), { status: 400 });
  }
}








 async function payment_succeeded(end_date:string,customer_id:string,subscription_id:string,email:string){

  const supabase = await supabaseAdmin()


  const {error}= await supabase.from("subscriptionData").update({
    end_date,
    customer_id,
    subscription_id

  }).eq("email",email)

  return error;

}

async function onSubCancel(subscription:string){
  console.log("subid",subscription);
  

  const supabase = await supabaseAdmin()

  const {error}= await supabase.from("subscriptionData").update({
    
    customer_id:null,
    subscription_id:null

  }).eq("subscription_id",subscription)

  return error;


}