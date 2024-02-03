/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname: 'media.licdn.com',
                // pathname:"/home/pandas/Documents/Projects/aboutsam/public/"
            }
        ]
    }
}

module.exports = nextConfig
