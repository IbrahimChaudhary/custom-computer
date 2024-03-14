/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "buildredux.com",
        port: "",
        pathname: "",
      },
    ],
  },
};

export default nextConfig;
