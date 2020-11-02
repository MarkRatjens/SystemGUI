app.blueprints.blueprint = (router) => (a, x) => [
  app.close(() => router.open('/blueprints')),
  a.h1(`${router.params.blueprint_id} blueprint`),
  router.mount({
    routes: {
      "/delete": app.blueprints.delete,
      "*": app.blueprints.show,
    }
  }),
];
