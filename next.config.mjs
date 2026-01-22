/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Produces a fully static site in /out during `next build`
  output: "export", // replaces `next export` :contentReference[oaicite:1]{index=1}

  // Helpful for static hosts so /about becomes /about/index.html
  // trailingSlash: true,

  // Static export cannot use Next's Image Optimization API
  // images: {
  //   unoptimized: true
  // }, // :contentReference[oaicite:2]{index=2}
  images: {
    loader: "custom",
    loaderFile: "./src/lib/netlifyImageLoader.js"
  },

  // If you use styled-components, prefer SWC compiler support
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
