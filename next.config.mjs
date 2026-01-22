/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: "export",

  images: {
    loader: "custom",
    loaderFile: "./src/lib/netlifyImageLoader.js"
  }
};

export default nextConfig;
