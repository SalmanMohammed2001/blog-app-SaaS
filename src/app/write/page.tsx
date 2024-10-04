


import Writeblogs from "@/components/writeblogs/writeblogs";


import { redirect } from "next/navigation";


import { getUser } from "../login/users";



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















