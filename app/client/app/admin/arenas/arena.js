app.admin.arenas.arena = (router) => (a, x) => [
  app.close(() => router.open('/admin/arenas')),
  a.h1(`${router.params.arena_id} arena`),
  router.mount({
    routes: {
      "/?": app.admin.arenas.show,
      "/delete": app.admin.arenas.delete,
      "/:action": app.admin.arenas.action,
    }
  }),
];
