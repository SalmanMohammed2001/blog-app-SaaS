
import Singlepostcom from '@/components/singlepostcom/single_post_com';
import { getUserProfileById } from '@/lib/supabase/blog';
import { log } from 'console';




const page = ({params}:any) => {


 

  return ( 

    <Singlepostcom params={params}/>
  )

  
}

export default page