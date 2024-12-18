/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/myapp",
  reactStrictMode: true,
  distDir: "build",
  output: "standalone",
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "localhost",
      "localhost:3001",
      "demoazure-d8ggd9e6g4gjfsfu.eastasia-01.azurewebsites.net",
    ],
  },
};

export default nextConfig;
