async function exportPathMap(defaultPathMap, { dev }) {
  if (dev) {
    return defaultPathMap;
  }

  const campsAsync = require("./_data/camps.json");
  const campOptionsAsync = require("./_data/camping-options.json");

  const promises = [campsAsync, campOptionsAsync];

  const [camps, options] = await Promise.all(promises);

  const filteredCamps = camps.filter(c => c.name === "Rancho 51");

  const campSlugs = filteredCamps.map(item => item.slug);

  const campPaths = filteredCamps.reduce((pages, camp) => {
    return {
      ...pages,
      [`/camping/${camp.slug}`]: {
        page: "/camping/[slug]",
        query: { slug: camp.slug }
      }
    };
  }, {});

  const campingOptionsPaths = options.reduce((pages, option) => {
    const p = campSlugs.reduce((acc, camp) => {
      return {
        ...acc,
        [`/accommodation/${camp}/${option.slug}`]: {
          page: "/accommodation/[camp]/[slug]",
          query: { camp, slug: option.slug }
        }
      };
    }, {});

    return {
      ...pages,
      ...p
    };
  }, {});

  // filter our dynamic paths from defaultPathMap
  const {
    ["/accommodation/[camp]/[slug]"]: accommodationsDynamicPath,
    ["/camping/[slug]"]: campsDynamicPath,
    ...staticPaths
  } = defaultPathMap;

  return Object.assign(
    {},
    //{ "/": { page: "/" } },
    staticPaths,
    campPaths,
    campingOptionsPaths
  );
}

module.exports = exportPathMap;
