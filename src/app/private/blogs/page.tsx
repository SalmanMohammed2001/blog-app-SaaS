"use client"

import PostCard from '@/components/postCard/postcart';
import { loadAllBlog } from '@/lib/supabase/blog'
import React, { useEffect, useState } from 'react'
import style from './blog.module.css'
import { IoMdArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';

import { log } from 'console';
import { getUser } from '@/app/login/users';





const AllBlogs =  () => {




  const [data, setData] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {

      //  const user= await  getUser()
      //  if(user== null){
      //  router.push('/login')
      //  }else{
      //   console.log('salman');
        
      //  }
       

      

        const blogData = await loadAllBlog();

   
        
        setData(blogData!);
      } catch (error) {
        console.error('Error loading blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
    
    return (
      <div>
       <div className='flex items-center'>
      <div className='pl-5'>
      <Link href={"/"}><IoMdArrowRoundBack className='w-[40px] h-[50px] cursor-pointer' /></Link>
      </div>

      <div className='flex-1'>
   
      <h1 className='text-center p-5 text-[#0AA195] text-[28px] font-semibold'>All Content</h1>
      </div>
       </div>
  <div className={style.container}>

       {data?.map((value) => (
         <div key={value.id} className={style.post}>
           <PostCard post={value} />
         </div>
       ))}
     </div>
      </div>
    
  );
   
    
}

export default AllBlogs