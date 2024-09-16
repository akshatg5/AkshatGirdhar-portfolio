/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "assets.aceternity.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
    eslint: {
      ignoreDuringBuilds: true,
  },
  };
  
  export default nextConfig;