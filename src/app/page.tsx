

import Hero from "@/components/hero/hero";
import { Nunito,  } from "@next/font/google";
import { getUser } from "./login/users";
import { log } from "console";
import { profileUserSearch, saveProfile } from "@/lib/supabase/profile";


import { createClient } from '@/lib/supabase/server';
import { uuid } from "uuidv4";


const roboto=Nunito
({
  weight: ['400','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',


})




export default async  function Home() {
  const supbase = createClient();

  const  user= await getUser()   
  


  const userEmail=user?.email;


  const searchProfileData=async()=>{

   

    const { data, error } = await supbase
    .from('profiles')
    .select('*')
    .eq('user_email', userEmail);
      if(data?.length == 0){
        saveProfileUser()
       
        
      }


      data?.forEach((data:any)=>{
        console.log(data.user_email);
        if(data.user_email == userEmail){
         
          
        }else{
         
          saveProfileUser()
        }
        
      })      
  


        
    
      
        

  }








  

 


  const saveProfileUser=async()=>{

    
    
              
    const { data, error } = await supbase
    .from('profiles')
    .insert([
      { 
        user_email:userEmail!
       
      },
    ])
    .select()

    if(data){
     // subcritionEmail()
    }
    
   }


   const subcritionEmail=async()=>{
        
    console.log('step 1');
    
    
const { data, error } = await supbase
.from('subscription')
.insert([
  { email: userEmail },

])
.select()
        
console.log(data);




   }
  




   if(userEmail != undefined){

    

    searchProfileData()
  
    
  }else{
  
  }
  
 





 


  return (

    <div>

      <Hero user={user}/>
    </div>
  
  );
}
