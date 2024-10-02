import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

import { login } from '../login/users'
import { useEffect } from 'react'




export default async function PrivatePage() {

    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()


  console.log(error)
  console.log(data)

  if (error || !data?.user) {
    redirect('/login')
  }

  const click=()=>{

  }

  return(
    <form action={login}>
     <p>Hello {data.user.email}</p>
     <button >Logout</button>
    </form>
   
  )
}