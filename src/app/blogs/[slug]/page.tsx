
import Singlepostcom from '@/components/singlepostcom/single_post_com';
import { getUserProfileById } from '@/lib/supabase/blog';
import { log } from 'console';


// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const { slug } = params;

//   console.log('dsdf',slug);
  

//   const profileData = await getUserProfileById(slug); 

 
//   return {
//     title: profileData?.title || "Default Title", 
//     description: profileData?.description || "Default description", 
   
//   };
// }

const page = ({params}:any) => {


 

  return ( 

    <Singlepostcom params={params}/>
  )

  
}

export default page