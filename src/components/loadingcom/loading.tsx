import Image from 'next/image'
import React from 'react'

const LoadingCom = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
        <Image src={"/loading.gif"} alt='loading' width={100} height={250}/>

    </div>
  )
}

export default LoadingCom