app.admin.packing.pack = (router) => (a, x) => [
  app.close(() => router.open('/admin/packing')),
  a.h1(`${router.params.pack_id} pack`),
  router.mount({
    routes: {
      "/?": app.admin.packing.show,
      "/build": app.admin.packing.build,
      "/delete": app.admin.packing.delete,
    }
  }),
];
