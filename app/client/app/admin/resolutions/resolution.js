app.admin.resolutions.resolution = (router) => (a, x) => [
  app.close(() => router.open('/admin/resolutions')),
  a.h1(`${router.params.resolution_id} resolution`),
  router.mount({
    routes: {
      "/delete": app.admin.resolutions.delete,
      "*": app.admin.resolutions.show,
    }
  }),
];
