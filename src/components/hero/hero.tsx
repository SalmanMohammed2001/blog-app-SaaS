"use client"

import LoginPage from "@/app/login/page";
import { logOut } from "@/app/login/users";
import { Nunito } from "@next/font/google";
import { useState, useTransition } from "react";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import Price from "../subscription/subscription";
import Footer from "../footer/footer";





//  const roboto=Nunito
// ({
//   weight: ['400','700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',


// })





const Hero =  ({user}:any) => {







    const[showLogin,setShowLogin]=useState<boolean>(false)

  return (
    <div>

{/* {showLogin? <LoginPage setShowLogin={setShowLogin}/> :<></>} */}

 <div className={`  `}>









<div className="   flex flex-col md:flex-row gap-[25px]">

<div className=" flex-1 mt-5">
  <h1 className=" text-[28px] md:text-[45px] font-[700] -tracking-tight">The Power Of Subscription Economy</h1>
  <p className=" text-[18px] md:text-[28px]" >
  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime The standard chunk of those interested.
  </p>

  {/* <button onClick={handleClickAction}>LogOut</button> */}

</div>

<div className=" flex-1 relative">
<Image src={"/hero.jpg"} alt="" fill />
</div>
</div>



<Price />

</div>



</div>
    
  )

}

export default Hero



