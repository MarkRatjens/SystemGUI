app.admin.resolutions = (router) => (a, x) => a.div([
  router.mount({
    routes: {
      "/?": app.admin.resolutions.index,
      // "/~new": app.admin.resolutions.new,
      "/:resolutionIdentifier*": app.admin.resolutions.resolution,
    }
  }),
]);
