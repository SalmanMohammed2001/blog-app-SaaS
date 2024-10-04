

import Hero from "@/components/hero/hero";
import { Nunito,  } from "@next/font/google";
import { getUser } from "./login/users";



import { createClient } from '@/lib/supabase/server';

import { searchProfileData } from "@/lib/supabase/profile_update";


const roboto=Nunito
({
  weight: ['400','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',


})




export const metadata={
  title:"Home Page",
  description:" Home Pafe Details"
  
}





export default async  function Home() {
  const supbase = createClient();

  const  user= await getUser()   
  


  const userEmail=user?.email;
  console.log(userEmail != undefined);
  



  


 
   
   
   if(userEmail != undefined){

  
    

    await searchProfileData(userEmail)



  
    
  }
 





 


  return (

    <div className="mt-[100px] ">

      <Hero user={user}/>
    </div>
  
  );
}
