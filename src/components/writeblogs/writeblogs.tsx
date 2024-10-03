"use client"

// import React, { useState } from 'react'
// import Tiptap from '../Tiptap/tiptap'

// import { v4 as uuidv4 } from 'uuid'

// const Writeblogs = ({setImages,FormDataDetails,Contentdetsils}) => {


//   const [content,setContent] =useState<String>()
//  // const[imgFile,setImgFile]=useState()

  


//   const [formData, setFormData] = useState<any>({
// //     id:"",
// //     content:"",
// //     title:"",
// //     imageUrl: ""
// // })

// //   const  handleContentChange=(reason:any)=>{
// //       setContent(reason)
      
// //   }


// //   const handlesubmit = (e: any) => {
 

// //     setFormData((currInfo)=>{
// //       return {
// //         ...currInfo,
// //         id:uuidv4(),
// //         content:content,
// //         title:e.target.value


// //       }
// //     })
         
// //     }
// //     const [imagePreviews, setImagePreviews] = useState<string[]>([]); 
// //     const handleFileInputChange = async (e: any) => {
// //       if (e.target.files) {
// //         const files = e.target.files;
// //         const previews = Array.from(files).map((file) => URL.createObjectURL(file));
// //         setImagePreviews(previews);
// //         setImages(files)
      
        
// //       }

// //   }
// //   const saveFunction= async()=>{

// //     FormDataDetails(formData)
// //     Contentdetsils(content)

  
// //   //   startTransition(async()=>{
// //   //  const data=  await saveBlog(formData,content)
// //   //  console.log(data);


   

   
// //   //   })

 
    
// //   }
  

// //   return (

// //       <div className='w-full min-h-screen pb-10 text-black'>
// //       <div  onChange={handlesubmit} className="max-w-3xl w-full grid place-items-start mx-auto pt-10 mb-10 gap-[18px]"
// //     >
// //       <div className="text-3xl text-center text-[#0AA195] mb-10">
// //         Notes Picker
// //       </div>

 

      
// //       <input id="text" name="title"   className={"  border-black border-2 border-solid rounded-md flex flex-col px-4 py-3 justify-start border-b border-r border-l  text-black items-start  font-medium text-[16px] w-[80%]  pt-4 rounded-bl-md rounded-br-md outline-none mb-5 "} type="email" placeholder={"Title"} required/>
     

      
// //       <label htmlFor="imageId"
// //                                className="flex items-center gap-2 p-1 font-medium border border-gray-300 rounded-md text-[#0AA195] focus:border-black focus:outline-none hover:border-black"><span
// //                             role="img" aria-label="upload" className="anticon anticon-upload"><svg
// //                             viewBox="64 64 896 896" focusable="false" data-icon="upload" width="1em" height="1em"
// //                             fill="currentColor" aria-hidden="true"><path
// //                             d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg></span>Upload</label>
// //                         <input type="file" id="imageId" accept="image/*" className="hidden" multiple
// //                                onChange={handleFileInputChange}></input>

// // {
// //                imagePreviews != null && <div className=''>
// //                     <div className="mt-4 flex">
                   
// //                      {imagePreviews.map((preview, index) => (
// //   <img key={index} src={preview} alt={`Preview ${index}`} width="150" className=" max-w-full border border-gray-300 w-full h-[180px] bg-cover  rounded-lg" />
// // ))}

// //                     </div>

                
                  
// //                 </div>
// //             }

// //            {/* {
// //             res != null && <div>
// //                <img src={`https://xfqedcxawymirmxohpox.supabase.co/storage/v1/object${res.fullPath}`} alt="Image Preview"
// //                              className=" max-w-full border border-gray-300 w-full h-[180px] bg-cover  rounded-lg"/>
// //             </div>
            
// //            }  */}




// //       <Tiptap name="content"
// //         content={content}
// //         onChange={(newContent: string) => handleContentChange(newContent)}
// //       />

// // <button onClick={saveFunction}
// //           type="submit"
// //           className="px-4 bg-[#0AA195] text-white py-2 rounded-md"
// //         >
// //           Save Blog
// //         </button>
// //     </div>


        
// //     </div>
// //   )
// // }

// // export default Writeblogs

"use client";

import React, { useState, ChangeEvent } from "react";
import Tiptap from "../Tiptap/tiptap";
import { v4 as uuidv4 } from "uuid";
import { saveBlog } from "@/lib/supabase/blog";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

// Define props interface


// Define form data type
interface FormDataType {
  id: string;
  content: string | undefined;
  title: string;
  imageUrl: string;
}

const Writeblogs = () => {

    const router = useRouter()


  const [content, setContent] = useState<string | undefined>("");

  const [formData, setFormData] = useState<FormDataType>({
    id: "",
    content: "",
    title: "",
    imageUrl: "",
  });

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((currInfo) => ({
      ...currInfo,
      id: uuidv4(),
      content: content,
      title: e.target.value,
    }));
  };

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = e.target.files;
      const previews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews(previews);
     // setImages(files);
    }
  };

  const saveFunction = async () => {
    const data=  await saveBlog(formData,content)

    if(data){
        
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500


    }); 
    
    router.push('/blogs')
    }else{
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Your work hasn't been saved",
            showConfirmButton: false,
            timer: 1500 
    })
   
    }


  };



  return (
    <div className="w-full min-h-screen pb-10 text-black">
      <div
        onChange={handleSubmit}
        className="max-w-3xl w-full grid place-items-start mx-auto pt-10 mb-10 gap-[18px]"
      >
        <div className="text-3xl text-center text-[#0AA195] mb-10">
          Notes Picker
        </div>

        <input
          id="text"
          name="title"
          className={
            "border-black border-2 border-solid rounded-md flex flex-col px-4 py-3 justify-start border-b border-r border-l  text-black items-start  font-medium text-[16px] w-[80%]  pt-4 rounded-bl-md rounded-br-md outline-none mb-5 "
          }
          type="text" // Changed type to 'text' instead of 'email' for the title
          placeholder={"Title"}
          required
        />

        <label
          htmlFor="imageId"
          className="flex items-center gap-2 p-1 font-medium border border-gray-300 rounded-md text-[#0AA195] focus:border-black focus:outline-none hover:border-black"
        >
          <span role="img" aria-label="upload" className="anticon anticon-upload">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="upload"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </span>
          Upload
        </label>
        <input
          type="file"
          id="imageId"
          accept="image/*"
          className="hidden"
          multiple
          onChange={handleFileInputChange}
        />

        {imagePreviews.length > 0 && (
          <div className="">
            <div className="mt-4 flex">
              {imagePreviews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Preview ${index}`}
                  width="150"
                  className="max-w-full border border-gray-300 w-full h-[180px] bg-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        )}

        <Tiptap
          name="content"
          content={content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />

        <button
          onClick={saveFunction}
          type="submit"
          className="px-4 bg-[#0AA195] text-white py-2 rounded-md"
        >
          Save Blog
        </button>
      </div>
    </div>
  );
};

export default Writeblogs;
