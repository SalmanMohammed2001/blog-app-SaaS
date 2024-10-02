"use client"



import { useRouter } from 'next/router'; 
import { handleLoginwithOuth, login, loginWithProvider, signup } from './users'
import { useEffect, useState, useTransition } from 'react'
import Image from 'next/image'
import { redirect, usePathname } from 'next/navigation'
import { root } from 'postcss'
import Link from 'next/link';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { createClient } from '@/lib/supabase/server';
import { log } from 'util';
import { Provider } from '@supabase/supabase-js';

export default function LoginPage({setShowLogin}:any) {


// @ts-ignore


    const[currState,setCurrState]=useState("Login")
    const[isPending,startTransition]=useTransition();

    const[data,setData]=useState({
      displayName:'',
      email:'',
      password:''
  })

  
  const onChangeHandler=(event: { target: { name: any; value: any; }; })=>{
    const name=event.target.name;
    const value=event.target.value;

    setData(data=>({...data,[name]:value}))
}

 
    const pathName=usePathname();


   const handlerclickaction=(formData :FormData)=>{
    if(currState==="Login"){
      startTransition(async()=>{
        await login(formData);

        setShowLogin(false)
      })
    
  }else {
      signup(formData)
      setShowLogin(false)
  }

   }
 

   const LoginwithOuth =(provider:Provider)=>{

    startTransition(async()=>{
      const { errorMessage, url } = await loginWithProvider(provider);
    

    if (errorMessage) {
   //   setErrorMessage(errorMessage);
   console.log(errorMessage);
   
    } else if (url) {
      // Redirect to the URL or perform any other action
      window.location.href = url; 
    }
    
    })

 
   }
   



  return (


    <div className={"login-popup absolute   z-20  w-[100vw] h-[100vh] bg-[#00000090] grid"}>
    <form action={handlerclickaction} className={"login-popup-container  "}>
        <div className={"login-popup-title flex justify-between items-center text-black "}>
            <h2 className={"text-[32px] font-bold"}>{currState}</h2>
          <Link href={'/'}> {pathName == "/login" ? <Image className={"w-[16px] cursor-pointer "} width={15} height={15}  src={'/cross_icon.png'} alt=""/> :
          
          <Image className={"w-[16px] cursor-pointer "} onClick={()=>setShowLogin(false)} width={15} height={15}  src={'/cross_icon.png'} alt=""/>
          } </Link>
        </div>

        <div className={"login-popup-input flex flex-col gap-[15px]"}>
            {currState === "Login" ? <></> : <input name='name'  className={"outline-none  p-[10px] border-[#c9c9c9] border-2 border-solid rounded-md  "} type="text" placeholder={"Your Name"}  required/>}

            <input id="email" name="email"   className={"outline-none  p-[10px] border-[#c9c9c9] border-2 border-solid rounded-md  "} type="email" placeholder={"Your Email"}  required/>
            <input id="password" name="password"   className={"outline-none   p-[10px] border-[#c9c9c9] border-2 border-solid rounded-md "} type="password" placeholder={"Your Password"} required />
        </div>

        <button type={"submit"}  className={"border-none p-[10px] text-white bg-orange-600 text-[14px] cursor-pointer rounded-md"}>{currState == "Sign Up"?"Create Account":"Login"}</button>
       
       
        <button type={"button"}  onClick={()=>LoginwithOuth("google")}  className={"border-none m p-[10px] text-white bg-[#0AA195] text-[14px] cursor-pointer rounded-md flex items-center justify-center gap-[10px]"}> <FaGoogle /> Google</button>
        <button type={"button"} onClick={()=>LoginwithOuth("github")}   className={"border-none p-[10px] text-white bg-[#0AA195] text-[14px] cursor-pointer rounded-md flex items-center justify-center gap-[10px]"}> <FaGithub /> GitHub</button>
       
        <div className="login-popup-condation flex items-start gap-[8px] mt-[-15x]">
            <input type="checkbox" className={"mt-[5px]"} required/>
            <p className={"text-[11px]"}>By Continuing  i agree to the terms of use  & privacy Policy</p>
        </div>
        {currState === "Login" ? <p className={"text-[13px]"}>Create a new Account ? <span className={"text-orange-600 font-[500] cursor-pointer "} onClick={()=>setCurrState("Sign Up")}> Click Here</span></p> :
            <p className={"text-[13px]"}>Already Have an account ? <span className={"text-orange-600 font-[500] cursor-pointer "} onClick={()=>setCurrState("Login")}> Login here</span></p>}
    </form>

    
</div>
  
  )
}