import React from 'react'
import { getUser } from '../login/users';
import { redirect } from "next/navigation";
import { findSubscription } from '@/lib/supabase/subscription';
import SubscriptionDetails from './components/SubscriptionDetails';







export const metadata={
    title:"Profile Page",
    description:" User Profile Page"
    
  }



const Profile = async () => {


    const  user= await getUser()


    if(user==null){
      redirect('/login')

    }

    // console.log("sub data1");
    // const data = await findSubscription(user.email);



  return (
    <div>
        <SubscriptionDetails email={user.email} />
    </div>
  )
}

export default Profile