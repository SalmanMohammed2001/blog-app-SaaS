import { createClient } from "./server";

const supabase = createClient()
import { v4 as uuidv4 } from 'uuid'

export async function saveProfile({email}:any) {
  //  const user= (await supabase.auth.getUser()).data.user
  
    const { data, error } = await supabase
.from('profiles')
    .insert([
  { 
    id:uuidv4,
    email:email
   },
])
.select()
        
    // if (error) {
    //   console.error('Error fetching user:', error);
    //   return error;
    // }else{
    //   // console.log(data);
    // return data;
    // }
  
 
    
    }
  

 export const  profileUserSearch= async({email}:any)=>{ 
let { data, error } = await supabase
.from('profiles')
.select('*')
.eq('email',email)
      .single(); 
      if (error) {
        console.error('Error fetching profile:', error);
        return error;
      }
    
      return data;

 }   

 
