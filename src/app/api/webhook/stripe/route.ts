// import { headers } from "next/headers";
// import { buffer } from "node:stream/consumers";
// import { log } from "node:util";
// import Stripe from "stripe";


import Stripe from "stripe";


// const endpointSecret=process.env.STRIPE_ENDPOINT_SECRET!

// const stripe=new Stripe(process.env.SRTIPE_SK!)


// export async function POST(req:any){

//     const rawBody = await buffer(req.body);

//      try{
  
//         const sig =headers().get('stripe-signature');
       
//         console.log(sig);
//        console.log(stripe);
//        // console.log(endpointSecret);
//        //  console.log(rawBody);

//       // const body = await req.text();
//        const body = await req.text();

//     //  const event= stripe.webhooks.constructEvent(body, sig!, endpointSecret!);
      

//     //     console.log(event);
        
//     let event;

//         try{
//             console.log('dd');
//             event= stripe.webhooks.constructEvent(
//                 rawBody,
//                 sig!,
//                 endpointSecret
//             );

//             console.log('ss');

//         }catch(err:any){
//             console.log(err);
            
//             console.log('event3 error')
//             return Response.json({error:`webhook Error ${err?.message}`})
//         }

//         // switch(event.type){
//         //     case "invoice.payment_succeeded":
//         //         console.log('salman');
                
//         //         console.log(event.data.object);
                
//         //     break;
//         //     default:
//         //         console.log(`Unhandle event type ${event.type}`);
                

//         // }

//         return Response.json({})
//     }catch(e){
//         return Response.json({error:'webhook Error'})
//     }
// }

// ;
//  import { buffer } from "node:stream/consumers";
// import { headers } from "next/headers";
//  const endpointSecret=process.env.STRIPE_ENDPOINT_SECRET

// const stripe=new Stripe(process.env.SRTIPE_SK!)


  

// export async function POST(req: any) {

    
//    const rawBody = await buffer(req.body);

//   const signature = req.headers.get('stripe-signature') as string;

//      //   console.log(body);
//         console.log('------------------------------');
        
    
             


    // if (!sig) {
    //   return new Response(JSON.stringify({ error: 'Missing stripe-signature header' }), { status: 400 });
    // }

    // let event;
    // event = stripe.webhooks.constructEvent(rawBody, signature!, endpointSecret!);
    //  console.log(event.data)



    // switch (event.type) {
    //             case 'invoice.payment_succeeded':
    //               console.log('Invoice payment succeeded');
    //               console.log('Event data:', event.data.object);
    //               break;
        
    //             default:
    //               console.log(`Unhandled event type: ${event.type}`);
    //           }



//       // Log the event for debugging
//       console.log('Event:', event);

//       // Handle different event types
//       switch (event.type) {
//         case 'invoice.payment_succeeded':
//           console.log('Invoice payment succeeded');
//           console.log('Event data:', event.data.object);
//           break;

//         default:
//           console.log(`Unhandled event type: ${event.type}`);
//       }

//       // Return a success response
//       return new Response(JSON.stringify({ received: true }), { status: 200 });
//     } catch (err: any) {
//       // Handle errors during event construction (e.g., invalid signature)
//       console.error('Event construction error:', err.message);
//       return new Response(JSON.stringify({ error: `Webhook Error: ${err.message}` }), { status: 400 });
//     }
//   } catch (err) {
//     // Handle other errors, such as buffer processing errors
//     console.error('Webhook handler error:', err);
//     return new Response(JSON.stringify({ error: 'Webhook Error' }), { status: 500 });
//   }
// return Response.json({})
// }




























// File: /src/app/api/webhook/stripe/route.ts

// import { NextRequest, NextResponse } from 'next/server';
// import { buffer } from "node:stream/consumers";
// // You might need to install micro if it's not installed

// const stripe = new Stripe("sk_test_51PQTK101P3LearWwaoznX75Dd2MhxQASadDvjbrrTpVbASwwex071C7zZl0P4WPHf2XRnACJNANrRt7wwdMaWtmz00AmF4T0Mr");

// const endpointSecret ="whsec_1e7147aa5d23c105573d11aa6012010732e66a0ad67590509eff53d59825743f;"

// export async function POST(req:any) {
//   let event;

//   // Get raw body
//  // const rawBody = await req.arrayBuffer(); // Read the request body as ArrayBuffer

//  const rawBody = await buffer(req.body);

//   // Stripe signature from headers
//   const signature = req.headers.get('stripe-signature') as string;

//   try {
//     // Verify the event by checking the signature
//     event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret!);

//     console.log(event.object);
    
//   } catch (err) {
//     console.error('⚠️ Stripe webhook signature verification failed.', err);
//     return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
//   }

//   // Handle the event
// //   switch (event.type) {
// //     case 'payment_intent.succeeded': {
// //       const paymentIntent = event.data.object;
// //       console.log('PaymentIntent was successful!', paymentIntent);
// //       break;
// //     }
// //     // Handle other events
// //     default:
// //       console.warn(`Unhandled event type: ${event.type}`);
// //   }

//   // Return a response to acknowledge receipt of the event
//   return NextResponse.json({ received: true }, { status: 200 });
// }







// src/app/api/webhook/stripe/route.ts
import { NextResponse } from 'next/server';
import { buffer } from "node:stream/consumers";
import { supabaseAdmin } from "@/lib/supabase/admin";


// Initialize Stripe with your secret key from environment variables
const stripe = new Stripe("sk_test_51PQTK101P3LearWwaoznX75Dd2MhxQASadDvjbrrTpVbASwwex071C7zZl0P4WPHf2XRnACJNANrRt7wwdMaWtmz00AmF4T0Mr")

// Webhook secret from environment variables
const endpointSecret: string ="whsec_1e7147aa5d23c105573d11aa6012010732e66a0ad67590509eff53d59825743f"

export async function POST(req: any) {
  // Read the raw body from the request
  const rawBody = await buffer(req.body)
  const signature = req.headers.get('stripe-signature');

  // Check if the signature is present
  if (!signature) {
    return new Response(JSON.stringify({ error: 'Missing stripe-signature header' }), { status: 400 });
  }

  let event: Stripe.Event;

  try {
    // Construct the event from the raw body and signature
    event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);

    // Log the event for debugging
    console.log('Event:', event);

    // Handle different event types
    switch (event.type) {
      case 'invoice.payment_succeeded':
        console.log('Invoice payment succeeded');
        console.log('Event data:', event.data.object);

        const result=event.data.object;
     

        const end_date=new Date( result.lines.data[0].period.end * 1000).toISOString()

        const customer_id= result.customer as string

        const subscription_id= result.subscription as string

        const email=result.customer_email as string

    const error =  await    payment_succeeded(end_date,customer_id,subscription_id,email)
    //const supabase = await supabaseAdmin()


    // const {error}= await supabase.from("subscriptionData").update({
    //   end_date,
    //   customer_id,
    //   subscription_id
  
    // }).eq("email",email)
      

     if(error){
      console.log(error);
      
      return Response.json({error:error.message})
    }
        break;
      case 'customer.discount.deleted':
        const deleteSubscription =event.data.object;
        deleteSubscription.id

        console.log(deleteSubscription);
        

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

// export const config = {
//   api: {
//     bodyParser: false, // Disable body parsing, we'll handle it ourselves
//   },
// };







 async function payment_succeeded(end_date:string,customer_id:string,subscription_id:string,email:string){

  const supabase = await supabaseAdmin()


  const {error}= await supabase.from("subscriptionData").update({
    end_date,
    customer_id,
    subscription_id

  }).eq("email",email)

  return error;

}
