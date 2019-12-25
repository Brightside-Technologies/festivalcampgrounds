const exportPathMap = require("./exportPathMap");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  },
  exportPathMap
});
