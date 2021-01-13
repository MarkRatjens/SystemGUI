app.dashboard.blueprints = (router) => (a, x) => [
  router.mount({
    routes: {
      // "/?": app.dashboard.blueprints.index,
      // "/~new": app.dashboard.blueprints.new,
      "/:blueprint_id*": app.dashboard.blueprints.show,
    }
  }),
];
