app.dashboard.system = (router) => (a, x) => a.div([
  router.mount({
    routes: {
      "/?": app.dashboard.system.show,
      "/network": app.dashboard.system.network,
      "/arenas*": app.dashboard.arenas,
      "/blueprints*": app.dashboard.blueprints,
      "/resolutions*": app.dashboard.resolutions,
    }
  }),
]);
