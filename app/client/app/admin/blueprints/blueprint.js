app.admin.blueprints.blueprint = (router) => (a, x) => [
  app.close(() => router.open('/admin/blueprints')),
  a.h1(`${router.params.blueprint_id} blueprint`),
  router.mount({
    routes: {
      "/delete": app.admin.blueprints.delete,
      "*": app.admin.blueprints.show,
    }
  }),
];
