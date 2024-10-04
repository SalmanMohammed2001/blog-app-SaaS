import { getUser } from "@/app/login/users";
import { createClient } from "./server";
import { log } from "console";

const supbase = createClient()







export const searchProfileData=async(email:any)=>{


    
    
    const { data, error } = await supbase
    .from('profiles')
    .select('*')
    .eq('email', email);
      if(data?.length == 0){
        saveProfileUser(email)
       
        
      }


      data?.forEach((data:any)=>{
        console.log(data.user_email);
        if(data.email == email){
         
          
        }else{
         
          saveProfileUser(email)
        }
        
      })      
  }



 


  export const saveProfileUser = async ( userEmail:  any) => {
    const { data, error } = await supbase
      .from('profiles')
      .insert([
        { 
          email: userEmail!  
        },
      ])
      .select();
  
    if (data) {
      subcritionEmail(userEmail);
    }
  
    if (error) {
      console.error('Error inserting profile:', error);
    }
  };


  export const subcritionEmail = async (userEmail: string) => {

    const { data, error } = await supbase
      .from('subscriptionData')
      .insert([
        { email: userEmail }  
      ])
      .select();
  
    if (error) {
      console.error('Error inserting subscription:', error);
    } else {
      console.log('Inserted data:', data);
    }
  };
  
