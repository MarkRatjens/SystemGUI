app.packs.pack = (router) => (a, x) => [
  app.close(() => router.open('/packs')),
  a.h1(`${router.params.pack_id} pack`),
  router.mount({
    routes: {
      "/?": app.packs.show,
      "/delete": app.packs.delete,
    }
  }),
];
