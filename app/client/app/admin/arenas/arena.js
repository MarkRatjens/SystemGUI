app.admin.arenas.arena = (router) => (a, x) => a.div([
  app.close(router),
  a.h1(`${router.params.arenaIdentifier} arena`),
  router.mount({
    routes: {
      "/?": app.admin.arenas.show,
      "/delete": app.admin.arenas.delete,
      "/bind": app.admin.arenas.bind,
      "/resolve": app.admin.arenas.resolve,
      "/:action": app.admin.arenas.action,
    }
  }),
]);
