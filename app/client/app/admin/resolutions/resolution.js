app.admin.resolutions.resolution = (router) => (a, x) => a.div([
//   app.closeOld(() => router.open('/admin/resolutions')),
  app.close(router),
  a.h1(`${router.params.resolution_id} resolution`),
  router.mount({
    routes: {
      "/edit*": app.admin.resolutions.edit,
      "/provision": app.admin.resolutions.provision,
      "/pack": app.admin.resolutions.pack,
      "/delete": app.admin.resolutions.delete,
      "/?": app.admin.resolutions.show,
    }
  }),
]);
