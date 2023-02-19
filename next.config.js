/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "einal3m.github.io",
        port: "",
        pathname: "/animal-crossing/**",
      },
    ],
  },
};

module.exports = nextConfig;
