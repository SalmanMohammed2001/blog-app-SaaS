import Allblogs from "@/components/allblogs/allblogs";
import { getUser } from "../login/users";
import { redirect } from "next/navigation";




const Blogs = async () => {



    const  user= await getUser()

    
    if(user==null){
      redirect('/login')

    }


    
    return (
      <div>
          <Allblogs/>
      </div>
    
  );
   
    
}

export default Blogs