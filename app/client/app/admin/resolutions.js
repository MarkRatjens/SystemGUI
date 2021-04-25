app.admin.resolutions = (router) => (a, x) => a.div([
  router.mount({
    routes: {
      "/?": app.admin.resolutions.index,
      "/~new": app.admin.resolutions.new,
      "/:resolution_id*": app.admin.resolutions.resolution,
    }
  }),
]);
