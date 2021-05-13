app.admin.publications.publication = (router) => (a, x) => a.div([
//   app.closeOld(() => router.open('/admin/publications')),
  app.close(router),
  a.h1(`${router.params.publication_id} publication`),
  router.mount({
    routes: {
      "/edit*": app.admin.publications.edit,
      "/delete": app.admin.publications.delete,
      "/sync": app.admin.publications.sync,
      "/export": app.admin.publications.export,
      "/blueprint": app.admin.publications.blueprint,
      "/?": app.admin.publications.show,
    }
  }),
]);
