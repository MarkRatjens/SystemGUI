app.admin.publications.publication = (route) => (a, x) => a.div([
//   app.closeOld(() => route.open('/admin/publications')),
  app.close(route),
  a.h1(`${route.params.publication_id} publication`),
  route.mount({
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
