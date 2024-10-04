'use server'


import { createClient } from "./server"


const supabase = createClient()




export async function saveBlog({title}:any,content:any) {

  const user= (await supabase.auth.getUser()).data.user

 const { data, error } = await supabase
  .from('listing')
  .insert([
    { title: title, 
        description:content,
        createdBy:user?.id
    },


  ])
  .select()
  if (error) {
    console.error('Error fetching user:', error);
    return error;
  }else{
 
  return data;
  }

  


  
  }

  
export async function loadAllBlog() {
    
    
let { data: listing, error } = await supabase
.from('listing')
.select('*')
    return listing;
  }
  


 export const getUserProfileById = async (userId: string) => {
    const { data, error } = await supabase
      .from('listing')  // Replace 'profiles' with your actual table name
      .select('*')
      .eq('id', userId)
      .single(); 
  
    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
  
    return data;
  };
  

  function getStorage() {
    const { storage } = createClient();
    return storage;
  }
  
  type UploadProps = {
    file: File;
    bucket: string;
    folder?: string;
  };
  // export const uploadImage = async ({ file }:any) => {
  //   const fileName = file.name;
  //   const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
  //   //const path = `${folder ? folder + "/" : ""}${uuidv4()}.${fileExtension}`;
  
  //   // try {
  //   //   file = await imageCompression(file, {
  //   //     maxSizeMB: 1,
  //   //   });
  //   // } catch (error) {
  //   //   console.error(error);
  //   //   return { imageUrl: "", error: "Image compression failed" };
  //   // }
  
  //   // const storage = getStorage();
  
  //   // const { data, error } = await storage.from("blogimages").upload(path, file);
  
  //   // if (error) {
  //   //   return { imageUrl: "", error: "Image upload failed" };
  //   // }
  
  //   // const imageUrl = `${process.env
  //   //   .NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/${bucket}/${
  //   //   data?.path
  //   // }`;
  
  //   // return { imageUrl, error: "" };
  // };