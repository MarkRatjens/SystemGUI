app.admin.provisioning.provisions = (router) => (a, x) => [
  app.close(() => router.open('/admin/provisioning')),
  a.h1(`${router.params.arena_id}/${router.params.resolution_id} provisions`),
  router.mount({
    routes: {
      "/?": app.admin.provisioning.show,
      "/delete": app.admin.provisioning.delete,
    }
  }),
];
