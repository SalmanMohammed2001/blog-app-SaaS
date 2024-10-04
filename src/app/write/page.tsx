


import Writeblogs from "@/components/writeblogs/writeblogs";


import { redirect } from "next/navigation";

import { v4 as uuidv4 } from 'uuid'
import { getUser } from "../login/users";
import { title } from "process";
import { describe } from "node:test";


export const metadata={
  title:"Blog Write Page",
  description:"we can write own blog"
  
}


const WritePage = async() => {

    const  user= await getUser()    
    if(user==null){
      redirect('/login')

    }

  return (

    <>

    <Writeblogs/>

    
    </>
    

 
   

)
 }


export default WritePage















