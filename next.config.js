module.exports = {
  env: {
    // Set the base URL of the api i.e: https://mocki.io/v1/408b7d92-d3c6-4513-b61d-15bf66d27048
    urlAPI: "https://mocki.io/v1/408b7d92-d3c6-4513-b61d-15bf66d27048",
  },
  useFileSystemPublicRoutes: false,
  // This callback sets the url to display certain content, i.e: "/": { page: "/" } means: if url === "/" render from pages the root component (index.js).

  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/denied": {page: "/denied"},
      "/form": { page: "/form" },
    };
  }
};
