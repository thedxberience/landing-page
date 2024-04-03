/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dxberienceapi.up.railway.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dxberienceapi.up.railway.app",
        port: "",
        pathname: "/v1/**",
      },
    ],
  },
};

export default nextConfig;
