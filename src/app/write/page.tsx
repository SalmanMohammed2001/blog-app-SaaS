


import Writeblogs from "@/components/writeblogs/writeblogs";


import { redirect } from "next/navigation";

import { v4 as uuidv4 } from 'uuid'
import { getUser } from "../login/users";
import { title } from "process";
import { describe } from "node:test";


export const metadata={
  title:"Blog Write Page",
  description:"we can write own blog"
  
}


const WritePage = async() => {

    const  user= await getUser()    
    if(user==null){
      redirect('/login')

    }

  return (

    <>

    <Writeblogs/>

    
    </>
    

 
   

)
 }


export default WritePage





















 //  // State to hold images and other form data
  //  const [images, setImages] = useState<FileList | null>(null);
  //  const [formDataDetails, setFormDataDetails] = useState<any>(null);
  //  const [contentDetails, setContentDetails] = useState<string | undefined>("");
 
  //  // Handler for image files
  //  const handleSetImages = (files: FileList) => {
  //    setImages(files); // Set the received FileList into state
  //  };
 
  //  // Handler for form data details
  //  const handleFormDataDetails = (formData: any) => {
  //    setFormDataDetails(formData); // Set form data into state
  //  };
 
  //  // Handler for content details (from Tiptap or other rich text editors)
  //  const handleContentDetails = (content: string | undefined) => {
  //    setContentDetails(content); // Set the content data
  //  };
 
  //  // Optional: function to submit the blog data (this can be connected to your backend/API)
  //  const submitBlogData = () => {
  //    console.log("Images:", images);
  //    console.log("Form Data:", formDataDetails);
  //    console.log("Content:", contentDetails);
  //    // You can now submit this data to a server, save it, etc.
  //  };


  
//     const [content,setContent] =useState<String>()
//     const[res,setRes]=useState<String[]>([])

    

  
//     const [formData, setFormData] = useState<any>({
//       id:"",
//       content:"",
//       title:"",
//       imageUrl: ""
//   })

//     const  handleContentChange=(reason:any)=>{
//         setContent(reason)
        
//     }

  
//     const handlesubmit = (e: any) => {
   

//       setFormData((currInfo)=>{
//         return {
//           ...currInfo,
//           id:uuidv4(),
//           content:content,
//           title:e.target.value


//         }
//       })
           
//       }
//     //   const [imagePreviews, setImagePreviews] = useState<string[]>([]); 
//     //   const handleFileInputChange = async (e: any) => {
//     //     if (e.target.files) {
//     //       const files = e.target.files;
//     //       const previews = Array.from(files).map((file) => URL.createObjectURL(file));
//     //       setImagePreviews(previews);

//     //       console.log(files[0].name);
          
//     //     }

//     // }
//     const [imageUrls, setImageUrls] = useState<string[]>([]);
//   const imageInputRef = useRef<HTMLInputElement>(null);
//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const filesArray = Array.from(e.target.files);
//       const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));
//       setImageUrls([...imageUrls, ...newImageUrls]);
//     }
//   };



//   const [isPending, startTransition] = useTransition();

//   const handleClickUploadImagesButton = async () => {
//     startTransition(async () => {
//       let urls = [];
//       for (const url of imageUrls) {
//         const data = JSON.parse(JSON.stringify(url));
      
//         const imageFile = await convertBlobUrlToFile(data);
//         console.log(imageFile instanceof File); // This should return true
//         const imageFile2 = new File([imageFile], "filename.jpg", { type: "image/jpeg" });
//         console.log({ imageFile2, bucket: "dank-pics" });

//         const { imageUrl, error } = await uploadImage( {file:imageFile} );

//         if (error) {
//           console.error(error);
//           return;
//         }

//         urls.push(imageUrl);
//       }

//       console.log(urls);
//      setImageUrls([]);
//     });
//   };


//     const saveFunction= ()=>{

  
//       startTransition(async()=>{

//         // const urls=[]

//         // for(const url of imagePreviews){
//         //   const imageFile= await convertBlobUrlToFile(url)

//         //   const {imageUrl,error}= await uploadImage({
//         //     file:imageFile,
//         //     bucket:'blogimages'
//         //   })


//         //   if(error){
//         //     console.log(error);
//         //     return
            
//         //   }

//         //   urls.push(imageUrl)
//         //   setImagePreviews([])
//         // }

//      const data=  await saveBlog(formData,content)
//      console.log(data);

     
//       })

   
      
//      }

// const[load,setLoad]=useState<any>();
// const[show,setShow]=useState(false)

// const [loading, setLoading] = useState(false);
//     //  useEffect(()=>{
//     //   const fetchBlogs = async () => {
   
  
//     //      const user= await  getUser()
//     //      setLoad(user)
//     //      if(user== null){
//     //       setShow(false)
//     //       router.push('/login')
       
        
//     //      }else{
          
//     //       setShow(true)
//     //       console.log(user);
          
//     //      }
         
  
        
//     //   };
          
      
//     //   fetchBlogs();
   
//     //  },[router])

//      if (loading) {
//       return <div>Loading...</div>;
//     }














//     <div className='w-full min-h-screen pb-10 text-black'>
// //</div>  <div  onChange={handlesubmit} className="max-w-3xl w-full grid place-items-start mx-auto pt-10 mb-10 gap-[18px]"
// >
//   <div className="text-3xl text-center text-[#0AA195] mb-10">
//     Notes Picker
//   </div>



  
//   <input id="text" name="title"   className={"  border-black border-2 border-solid rounded-md flex flex-col px-4 py-3 justify-start border-b border-r border-l  text-black items-start  font-medium text-[16px] w-[80%]  pt-4 rounded-bl-md rounded-br-md outline-none mb-5 "} type="email" placeholder={"Title"} required/>
 

  
//   <label htmlFor="imageId"
//                            className="flex items-center gap-2 p-1 font-medium border border-gray-300 rounded-md text-[#0AA195] focus:border-black focus:outline-none hover:border-black"><span
//                         role="img" aria-label="upload" className="anticon anticon-upload"><svg
//                         viewBox="64 64 896 896" focusable="false" data-icon="upload" width="1em" height="1em"
//                         fill="currentColor" aria-hidden="true"><path
//                         d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg></span>Upload</label>
//                     <input type="file" id="imageId" accept="image/*" className="hidden" multiple
//                            onChange={handleImageChange}></input>

// {
//            imageUrls != null && <div className=''>
//                 <div className="mt-4 flex">
               
//                  {imageUrls.map((preview, index) => (
// <img key={index} src={preview} alt={`Preview ${index}`} width="150" className=" max-w-full border border-gray-300 w-full h-[180px] bg-cover  rounded-lg" />
// ))}

//                 </div>

            
              
//             </div>
//         }

//        {/* {
//         res != null && <div>
//            <img src={`https://xfqedcxawymirmxohpox.supabase.co/storage/v1/object${res.fullPath}`} alt="Image Preview"
//                          className=" max-w-full border border-gray-300 w-full h-[180px] bg-cover  rounded-lg"/>
//         </div>
        
//        }  */}




//   <Tiptap name="content"
//     content={content}
//     onChange={(newContent: string) => handleContentChange(newContent)}
//   />

// <button onClick={saveFunction}
//       type="submit"
//       className="px-4 bg-[#0AA195] text-white py-2 rounded-md"
//     >
//       Save Blog
//     </button>
// </div>


    
// </div>
    