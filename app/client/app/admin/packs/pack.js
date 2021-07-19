app.admin.packs.pack = (route) => (a, x) => a.div([
//   app.closeOld(() => route.open('/admin/packs')),
  app.close(route),
  a.h1(`${route.params.resolutionIdentifier} pack`),
  route.mount({
    routes: {
      "/?": app.admin.packs.show,
      "/artifact": app.admin.packs.artifact,
      "/commit": app.admin.packs.commit,
      "/delete": app.admin.packs.delete,
    }
  }),
]);
