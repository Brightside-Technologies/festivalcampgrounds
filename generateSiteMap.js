const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://festivalcampgrounds.com",
  pagesDirectory: `${__dirname}\\pages`,
  targetDirectory: "public/",
  nextConfigPath: `${__dirname}\\next.config.js`,
  ignoredExtensions: ["png", "jpg"]
});
