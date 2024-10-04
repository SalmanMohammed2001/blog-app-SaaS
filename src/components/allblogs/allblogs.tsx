"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import PostCard from '../postCard/postcart'
import { loadAllBlog } from '@/lib/supabase/blog'
import style from './allblog.module.css'
import LoadingCom from '../loadingcom/loading'

const Allblogs = () => {


    const [data, setData] = useState<any[]>([]); 
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
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
      return (
        <div>
        <LoadingCom/>
      </div>
      )
    }






  return (
    <div>
       <div className='flex items-center mt-[100px]'>
    
      <div className='flex-1'>
   

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
  )
}

export default Allblogs