/** @type {import('next').NextConfig} */
const nextConfig = {

   // https://xfqedcxawymirmxohpox.supabase.co/

    images:{
        remotePatterns:[
            {
                protocol:'https', 
                hostname:'xfqedcxawymirmxohpox.supabase.co' //add host name
            }
        ]
    }
};

export default nextConfig;
