app.blueprints = (router) => (a, x) => [
  router.mount({
    routes: {
      "/?": app.blueprints.index,
      "/~new": app.blueprints.new,
      "/~import": app.blueprints.import,
      "/:blueprint_id*": app.blueprints.blueprint,
    }
  }),
];
