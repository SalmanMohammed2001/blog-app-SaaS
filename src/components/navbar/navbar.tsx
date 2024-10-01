
import Link from "next/link";
import {Roboto} from '@next/font/google';


const roboto=Roboto({
    weight: ['700'],
  subsets: ['latin'],
  display: 'swap',

})



const Navbar=()=>{
    return(
        <div className={` flex  justify-between ${roboto.className}`}>
            <div className="flex items-center">
                <Link href={"/"} className="  text-[44px]" >BLOG SASS</Link>
            </div>

            <div className={" flex"}>
               <nav className=" flex items-center gap-[18px] ">
              <ul className="flex gap-[25px] text-[14px]">
              <li><a href="#about" className="text-black hover:text-[#0AA195]">HOME</a></li>
              <li><a href="/login" className="text-black hover:text-[#0AA195]">OUR STORY</a></li>
              <li><a href="/about" className="text-black hover:text-[#0AA195]">WRITE</a></li>
              <li><a href="/login" className="text-black hover:text-[#0AA195]">SIGNIN</a></li>
             
              </ul>
         
              <a className='py-[10px] px-[18px] text-white text-sm rounded-md cursor-pointer bg-[#0AA195] '>Get Start</a>
       
             

               </nav>

            </div>

        </div>
    )
}

export default  Navbar

{/* <nav className={`justify-end  gap-[18px] items-center  flex`}>
<ul className={`flex gap-[15px] text-lg items-center`}>
    <li><a href="#about" className="text-black hover:text-green-400">Our Story</a></li>
    <li><a href="#about" className="text-black hover:text-green-400">Write</a></li>
    <li><a href="#about" className="text-black hover:text-green-400">Sign in</a></li>

</ul>
<a className='py-[10px] px-[18px] text-white text-sm rounded-md cursor-pointer bg-[#0AA195] '>Get Start</a>
</nav> */}