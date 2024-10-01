"use client"



import { useRouter } from 'next/router'; 
import { login, signup } from './users'
import { useEffect, useState, useTransition } from 'react'
import Image from 'next/image'
import { redirect, usePathname } from 'next/navigation'
import { root } from 'postcss'
import Link from 'next/link';

export default function LoginPage({setShowLogin}) {


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

    useEffect(()=>{
      console.log(pathName)
    })


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
 

   



  return (
    // <form>
    //  {/* <Link href={"/private"}> <button>fdgdf</button></Link> */}
    //   <label htmlFor="email">Email:</label>
    //   <input id="email" name="email" type="email" required />
    //   <label htmlFor="password">Password:</label>
    //   <input id="password" name="password" type="password" required />
    //   <button formAction={login}>Log in</button>
    //   <button formAction={signup}>Sign up</button>
    // </form>


    // <form  className='flex items-center border  justify-center   w-[100vw] h-[100vh]'>
    //   <div className='w-[350px] border flex flex-col gap-[25px] shadow-2xl p-5 rounded-md'>
    //     <h1 className='text-center font-bold text-[35px]'>Login</h1>
    //   <input type="text" className='outline-none  p-[10px] border-[#c9c9c9] border-2 border-solid rounded-md' placeholder='Enter Email' />
    //   <input type="text" className='outline-none  p-[10px] border-[#c9c9c9] border-2 border-solid rounded-md' placeholder='Enter Password' />

    //   <button className='py-3 w-[80px] px-2 border bg-[#0AA195] text-white font-bold rounded-md'>Login</button>
    //   </div>
    // </form>

    <div className={"login-popup absolute   z-20  w-[100vw] h-[100vh] bg-[#00000090] grid"}>
    <form action={handlerclickaction} className={"login-popup-container "}>
        <div className={"login-popup-title flex justify-between items-center text-black "}>
            <h2 className={"text-[32px] font-bold"}>{currState}</h2>
          <Link href={'/'}> {pathName == "/login" ? <Image className={"w-[16px] cursor-pointer "} width={15} height={15}  src={'/cross_icon.png'} alt=""/> :
          
          <Image className={"w-[16px] cursor-pointer "} onClick={()=>setShowLogin(false)} width={15} height={15}  src={'/cross_icon.png'} alt=""/>
          } </Link>
        </div>

        <div className={"login-popup-input flex flex-col gap-[20px]"}>
            {currState === "Login" ? <></> : <input name='name'  className={"outline-none  p-[10px] border-[#c9c9c9] border-2 border-solid rounded-md  "} type="text" placeholder={"Your Name"} required/>}

            <input id="email" name="email"   className={"outline-none  p-[10px] border-[#c9c9c9] border-2 border-solid rounded-md  "} type="email" placeholder={"Your Email"} required/>
            <input id="password" name="password"   className={"outline-none   p-[10px] border-[#c9c9c9] border-2 border-solid rounded-md "} type="password" placeholder={"Your Password"} required/>
        </div>

        <button type={"submit"}  className={"border-none p-[10px] text-white bg-orange-600 text-[14px] cursor-pointer rounded-md"}>{currState == "Sign Up"?"Create Account":"Login"}</button>
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