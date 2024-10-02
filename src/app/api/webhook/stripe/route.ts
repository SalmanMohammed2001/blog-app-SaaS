import { error } from 'console'
import { headers } from 'next/headers'
import React from 'react'
import { buffer } from 'stream/consumers'
import Stripe from 'stripe'


const endpointSecret=process.env.STRIPE_ENDPOINT_SECRET

const stripe=new Stripe(process.env.SRTIPE_SK!)


export async function POST(req:any){

    const rawBody = await buffer(req.body);

    try{
        const sig =headers().get("stripe-signatrue")
        let event;

        try{
            event= stripe.webhooks.constructEvent(
                rawBody,
                sig!,
                endpointSecret!
            );
        }catch(err:any){
            return Response.json({error:`webhook Error ${err?.message}`})
        }

        switch(event.type){
            case "customer.subscription.deleted":
            break;
            default:
                console.log(`Unhandle event type ${event.type}`);
                

        }

        return Response.json({})
    }catch(e){
        return Response.json({error:'webhook Error'})
    }
}