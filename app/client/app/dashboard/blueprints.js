app.dashboard.blueprints = (router) => (a, x) => a.div([
  router.mount({
    routes: {
      // "/?": app.dashboard.blueprints.index,
      "/~new": app.admin.blueprints.new,
      "/:blueprint_id*": app.dashboard.blueprints.show,
    }
  }),
]);
