'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../lib/supabase/server'
import { Provider } from '@supabase/supabase-js'




export async function login(formData:any) {
  const supabase = createClient()


  

  const data = {
    email: formData.email,
    password: formData.password,
  }
  
  console.log(data);

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}



 export async function signup(formData:any) {


  const data = {
    email: formData.email,
    password: formData.password,
  }
  
  console.log(data);

  const {auth} = createClient()

  const { error } = await auth.signUp(data)

  console.log(error)

  if (error) {
    redirect('/error')
  }

//  revalidatePath('/', 'layout')
 redirect('/subscription')
}


export async function logOut() {


  const {auth} = createClient()

  const { error } = await auth.signOut()


  

  console.log(error)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}



export const getUserById = async (userId: any) => {

  const supabase = createClient()
  
  const { data, error } = await supabase.auth.getUser(userId)
    
  if (error) {
    console.log('salman');
    
    console.error('Error fetching user:', error);
    return null;
  }

  return data;
};



export async function getUser() {
  const {auth}=createClient();
  const user= (await auth.getUser()).data.user
  return user;
  
}



  export const loginWithProvider = async (provider: Provider) => {
// 	try{
//     const supabase = createClient()

//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider,
//       options:{
//    //   redirectTo:`${process.env.NEXT_PUBLIC_URL}/auth/callback`
//  //  redirectTo:`${process.env.NEXT_PUBLIC_URL}/auth/callbackn?next=?`
//       }
//     })
    
//     if(data){
//     console.log(data);
    
//     }
     
//     if (error) {
//       return {
//         errorMessage: error.message,
//         url: null,
//       };
//     }
//     return {
//       errorMessage: null,
//       url: data.url, // This will be the URL where the user is redirected
//     };
    
//   }catch(error){
//     return {errorMessage:"Error logging in"}
//   }

const loginWithProvider = async (provider: "github" | "google") => {
  const supabase = createClient()
 

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo:
        window.location.origin +`/auth/callback`
      
    },
  });



};
  

  }
 