import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thecatapi.com",
        port: "",
        pathname: "/**",
      },
    ],
    loader: (width, src, quality) => `/components/assets/dog-face.svg`,
  },
};

export default nextConfig;
