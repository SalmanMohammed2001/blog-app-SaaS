"use client"

import Link from "next/link";
import {Roboto} from '@next/font/google';

import {useEffect, useState, useTransition} from "react";
import { getUser, logOut } from "@/app/login/users";



// const roboto = Roboto({
//     weight: ['700'],
//     subsets: ['latin'],
//     display: 'swap',

// })


const Navbar =  ({setShowLogin,user}: any) => {

    const[data,setData]=useState<any>()


    const[isPending,startTransition]=useTransition();
    const handleClickAction=()=>{
     startTransition(async()=>{
       await logOut();
     })
     }


    return (
        <div className={`   flex  justify-between  relative`}>
            <div className="flex items-center">
                <Link href={"/"} className="  text-[44px]">BLOG SASS</Link>
            </div>

            <div className={" flex"}>
                <nav className=" flex items-center gap-[25px] ">
                    <ul className=" gap-[25px] text-[14px] hidden md:flex">
                        <li><Link href={"/"} className="text-black hover:text-[#0AA195]">HOME</Link></li>
                        <li><Link href={"/blogs"} className="text-black hover:text-[#0AA195]">READ</Link></li>
                        <li><Link href={"/write"} className="text-black hover:text-[#0AA195]">WRITE</Link></li>


                    </ul>
               

              
                  { user != null ?   <a className='py-[10px] px-[18px]  text-sm rounded-md cursor-pointer border-[#0AA195] border-2  bg-green-100 text-black ' onClick={handleClickAction} >LogOut</a> :
                    <a className='py-[10px] px-[18px] text-black text-sm rounded-md cursor-pointer border-2   border-[#0AA195] '  onClick={() => setShowLogin(true)} >Login</a>
                
            }
        


                </nav>

            </div>


            


        </div>
    )
}

export default Navbar

