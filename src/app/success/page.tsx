import React from 'react'
import { getUser } from '../login/users'
import { redirect } from 'next/navigation'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import Link from 'next/link'

const SuccessPage = async () => {

  const  user= await getUser()    
  if(user==null){
    redirect('/login')

  }



  return (
  <div className='w-[100vw]  h-[100vh] flex items-center justify-center'>

      <div className='w-[40%] mx-auto shadow-md p-5 flex items-center flex-col'>

          <p className='text-center font-serif m-2'>Thank you for your purchase. Your payment has been successfully processed.</p>
   
        <Link href={'/'}>      <FaRegArrowAltCircleLeft className='w-[45px] h-[45px]' /></Link>
         
      </div>
  </div>
  )
}

export default SuccessPage