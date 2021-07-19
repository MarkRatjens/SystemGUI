app.admin.arenas.arena = (route) => (a, x) => a.div([
  app.close(route),
  a.h1(`${route.params.arenaIdentifier} arena`),
  route.mount({
    routes: {
      "/?": app.admin.arenas.show,
      "/delete": app.admin.arenas.delete,
      "/bind": app.admin.arenas.bind,
      "/resolver": app.admin.arenas.resolver,
      "/installer": app.admin.arenas.installer,
      "/apply": app.admin.arenas.apply,
    }
  }),
]);
