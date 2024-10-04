"use server"

import { log } from "console";
import { createClient } from "./server"
import { useSelector } from "react-redux";
import { uuid } from "uuidv4";


const supabase = createClient()
import { v4 as uuidv4 } from 'uuid'
import { getUser } from "@/app/login/users";

export async function findSubscription(email:any){


   

    const { data, error } = await supabase
    .from("subscriptionData")
    .select('*')
    .eq('email', email);
   
    if(data){
        return data;
    }
    console.log(error);
    

}