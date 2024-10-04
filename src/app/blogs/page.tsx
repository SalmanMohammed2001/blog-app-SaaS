import Allblogs from "@/components/allblogs/allblogs";
import { getUser } from "../login/users";
import { redirect } from "next/navigation";
import { findSubscription } from "@/lib/supabase/subscription";
import Price from "@/components/subscription/subscription";




const Blogs = async () => {

    const  user= await getUser()


    if(user==null){
      redirect('/login')

    }

    console.log("sub data1");
    const data = await findSubscription(user.email);

  //    console.log("sub data",data);
  
    
let isActivate

    const isActiveCheck=()=>{
        data?.forEach((value:any)=>{
          isActivate= !value.end_date! ? false : new Date(value.end_date) > new Date()
          
        })
    }

    isActiveCheck()

   


    
    return (
      <div>

        {isActivate ?  <Allblogs/> : (<div>
           
            <div>

            <h1 className="text-[24px] font-bold p-5 text-center">Please  Get Subscriptiondd </h1>

           <div className=" container p-5">
      
           <Price/>
           </div>
           </div>
           </div>
           )}

 
      </div>
    
  );
   
    
}

export default Blogs