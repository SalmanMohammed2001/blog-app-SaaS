"use client"

import  Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { Nunito,  } from "@next/font/google";
import Image from "next/image";
import { logOut } from "./login/users";
import { useState, useTransition } from "react";
import LoginPage from "./login/page";
import Subscription from "@/components/subscription/subscription";
import Price from "@/components/subscription/subscription";



const roboto=Nunito
({
  weight: ['400','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',


})

export default function Home() {

  const[showLogin,setShowLogin]=useState<boolean>(false)
  

const[isPending,startTransition]=useTransition();
 const handleClickAction=()=>{
  startTransition(async()=>{
    await logOut();
  })


  }

  return (

    <div>

{showLogin? <LoginPage setShowLogin={setShowLogin}/> :<></>}
 <div className={` container  ${roboto.className} `}>




<Navbar setShowLogin={setShowLogin}/>
<div className="flex  gap-[10px]">

<div className=" flex-1">
  <h1 className="text-[45px] font-[700] -tracking-tight">The Power Of Subscription Economy</h1>
  <p className=" text-[28px]" >
  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime The standard chunk of those interested.
  </p>

  <button onClick={handleClickAction}>LogOut</button>

</div>

<div className=" flex-1 relative">
<Image src={"/hero.jpg"} alt="" fill />
</div>


</div>

<Price/>
<Footer/>
</div>
    </div>
  
  );
}
