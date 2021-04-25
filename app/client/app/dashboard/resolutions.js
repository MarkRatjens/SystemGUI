app.dashboard.resolutions = (router) => (a, x) => a.div([
  router.mount({
    routes: {
      "/?": app.dashboard.resolutions.index,
      "/~new": app.dashboard.resolutions.new,
      "/:resolution_id*": app.dashboard.resolutions.show,
    }
  }),
]);
