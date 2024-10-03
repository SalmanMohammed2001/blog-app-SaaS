"use client"

import { getUser } from '@/app/login/users'
import { ckeckout } from '@/lib/actions/stripe';
import { createClient } from '@/lib/supabase/server'

import Stripe from "stripe";



import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react'

import {loadStripe} from '@stripe/stripe-js';


const Checkout =  ({priceId}:{priceId:string}) => {

    const router = useRouter();


    const [loading,setLoading] =useState(false)

  
   const fetchBlogs = async () => {
   

            const user= await  getUser()
      
            if(user== null){
             
             router.push('/login')
          
           
            }else{
            
                setLoading(true)
                
                
  
    const data=JSON.parse(  await ckeckout(user.email!,priceId,location.origin + "/success"))


       console.log(data);
        


       const stripe=  await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!)
         const res= await    stripe?.redirectToCheckout({sessionId:data.id})


                if(res?.error){
                    setLoading(false)
                    alert("Fail to checkout")
                }


                setLoading(false)
            }
            
           
         };
    const handleCheckout =()=>{
        
        fetchBlogs()
     
    }
  
    return <button className='py-[10px] px-[18px] text-white text-sm rounded-md cursor-pointer bg-[#0AA195] '  onClick={handleCheckout}>Get Subscription  </button>

}

export default Checkout