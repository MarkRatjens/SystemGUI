app.admin.resolutions.resolution = (route) => (a, x) => a.div([
//   app.closeOld(() => route.open('/admin/resolutions')),
  app.close(route),
  a.h1(`${route.params.resolutionIdentifier} resolution`),
  route.mount({
    routes: {
      "/edit*": app.admin.resolutions.edit,
      "/provision": app.admin.resolutions.provision,
      "/pack": app.admin.resolutions.pack,
      "/delete": app.admin.resolutions.delete,
      "/?": app.admin.resolutions.show,
    }
  }),
]);
