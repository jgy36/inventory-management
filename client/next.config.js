/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-inventorymanagement001.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true, // Disable image optimization
  },
  output: "export", // Keep the export setting
};

module.exports = nextConfig; // Use CommonJS module.exports syntax
