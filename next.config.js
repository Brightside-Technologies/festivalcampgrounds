const exportPathMap = require("./exportPathMap");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  },
  exportPathMap
});

// module.exports = withCSS({
//   webpack: config => {
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         $: "jquery",
//         jQuery: "jquery"
//       })
//     );
//     return config;
//   },
//   cssLoaderOptions: {
//     url: false
//   }
// });
