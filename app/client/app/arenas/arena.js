app.arenas.arena = (router) => (a, x) => [
  app.close(() => router.open('/arenas')),
  a.h1(`${router.params.arena_id} arena`),
  router.mount({
    routes: {
      "/?": app.arenas.show,
      "/delete": app.arenas.delete,
      "/:action": app.arenas.action,
    }
  }),
];
