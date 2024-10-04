"use client"


import { getUserProfileById } from '@/lib/supabase/blog';
import { useRouter } from 'next/router';
import React, { Suspense, useEffect, useState } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image';
import { Divide } from 'lucide-react';
import LoadingCom from '../loadingcom/loading';



const Singlepostcom = ({params}:any) => {




  const {slug}=params;

  console.log(slug);
  

  const [data, setData] = useState<any>(null);
const [loading, setLoading] = useState(true);

// This will extract the `slug` from the route

useEffect(() => {
  if (!slug) return; // Avoid fetching if slug is undefined

  const fetchProfile = async () => {
    try {
      const profileData = await getUserProfileById(slug as string); // Ensure `slug` is string type
      console.log(profileData);
      setData(profileData);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchProfile();
}, [slug]); // Re-run when slug changes

if (loading) {
  return (
    <div>
    <LoadingCom/>
  </div>
  );
}

if (!data) {
  return <div>No user profile found.</div>;
}
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric',year:'numeric' });
};







  return (
       
    <div className={`mt-[100px] p-2 shadow-md  `}>

    <div className={styles.imgContainer}>

    {/* { post.img && <Image src={post.img} alt='imager' className={styles.image} fill/>} */}
    
     <Image src={data.image_url} alt='imagee' className={styles.image} fill/>
    
    </div>
    
  


    <div className={styles.textContainer}>

      <h1 className={styles.title}> {data.title}</h1>

      <div className={styles.details}>
  
  


{/* {data && ( <Suspense fallback={<div>Loading..</div>}>
 <PostUser userId={data.createdBy}/>
 </Suspense>)}  */}

        <div className={styles.detailsText}>
        <span className={styles.detailTile}>Published</span>
        <span className={styles.detailValue}>{formatDate(data.created_at)}</span>
        </div>

    </div>

<div className={styles.content} dangerouslySetInnerHTML={{__html: data.description}}></div>

    </div>
  </div>
  )
}

export default Singlepostcom