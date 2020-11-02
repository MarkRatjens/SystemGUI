app.resolutions.resolution = (router) => (a, x) => [
  app.close(() => router.open('/resolutions')),
  a.h1(`${router.params.resolution_id} resolution`),
  router.mount({
    routes: {
      "/delete": app.resolutions.delete,
      "*": app.resolutions.show,
    }
  }),
];
