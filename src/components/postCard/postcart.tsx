import React from 'react'
import styles from './postCard.module.css'

import Link from 'next/link'
import Image from 'next/image';
import dynamic from 'next/dynamic';



const PostCard = ({post}:any) => {


  return (
    
    <div className={`  ${styles.containe} shadow-xl p-5 rounded-md`}>


        <div className={styles.top}>
              <div className={styles.imgContainer}>
              <Image alt='' src={post.image_url} className={styles.img} fill/>
              </div>
            <span className={styles.dates}>01.01.2024</span>
        </div>
        
        <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
           <p className={styles.desc} dangerouslySetInnerHTML={{__html: post.description}}></p>
        {/* <p className={styles.desc}>  { post.description }</p> */}
        <Link className={styles.link} href={`/blogs/${post.id}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard