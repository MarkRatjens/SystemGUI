app.admin.arenas.arena = (router) => (a, x) => a.div([
  app.close(router),
  a.h1(`${router.params.arena_id} arena`),
  router.mount({
    routes: {
      "/?": app.admin.arenas.show,
      "/delete": app.admin.arenas.delete,
      "/bootstrap": app.admin.arenas.bootstrap,
      "/resolve": app.admin.arenas.resolve,
      "/:action": app.admin.arenas.action,
    }
  }),
]);
