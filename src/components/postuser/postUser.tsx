import React from 'react'
import styles from './postUser.module.css'
import Image from 'next/image';
import { log } from 'util';
import { getUserById } from '@/app/login/users';




// const getData= async(userId)=>{

//   const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"}); 
//   const response= res.data

//   return response;
  
// }



const PostUser = async ({userId}:any) => {


    console.log(userId);
    

    const data= await getUserById(userId)
    
    // console.log(data);
    


  return (
    <div className={styles.container}>

{/* <Image src={users.img ? users.img :"/noavatar.png"} alt='imager' className={styles.avatar} 
 width={50} height={50} />

<div className={styles.texts}>
<span className={styles.title}>Author</span>
<span className={styles.username}>{users.username}</span>
</div> */}
   
    </div>

  )
}

export default PostUser