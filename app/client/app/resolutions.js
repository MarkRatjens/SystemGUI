app.resolutions = (router) => (a, x) => [
  router.mount({
    routes: {
      "/?": app.resolutions.index,
      "/~new": app.resolutions.new,
      "/:resolution_id*": app.resolutions.resolution,
    }
  }),
];
