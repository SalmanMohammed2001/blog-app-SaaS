import { createClient } from "./server";

const supabase = createClient()
import { v4 as uuidv4 } from 'uuid'

export async function saveProfile({email}:any) {
 
  
  const { data, error } = await supabase
  .from('profiles')
  .insert([
    { 
     
      email: email  
    }
  ])
  .select();
        
    if (error) {
      console.error('Error fetching user:', error);
      return error;
    }else{
   
    return data;
    }
  
 
    
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

 
