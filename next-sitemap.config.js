/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://festivalcampgrounds.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // If you're using trailingSlash in Next config, match it here:
  trailingSlash: false,

  // Optional: exclude any non-indexable routes
  exclude: ["/404", "/500"],

  // Optional: set defaults + lastmod
  transform: async (config, path) => ({
    loc: path,
    changefreq: "weekly",
    priority: path === "/" ? 1.0 : 0.7,
    lastmod: new Date().toISOString()
  })
};
