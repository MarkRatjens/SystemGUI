app.admin.blueprints.blueprint = (router) => (a, x) => a.div([
//   app.closeOld(() => router.open('/admin/blueprints')),
  app.close(router),
  a.h1(`${router.params.blueprint_id} blueprint`),
  router.mount({
    routes: {
      "/edit*": app.admin.blueprints.edit,
      "/delete": app.admin.blueprints.delete,
      "/sync": app.admin.blueprints.sync,
      "/?": app.admin.blueprints.show,
    }
  }),
]);
