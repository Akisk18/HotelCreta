/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qjgfntxmvikcaqcsymst.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/rooms/**",
      },
    ],
  },
};

export default nextConfig;
