app.admin.provisioning.provisions = (router) => (a, x) => a.div([
//   app.closeOld(() => router.open('/admin/provisioning')),
  app.close(router),
  a.h1(`${router.params.resolution_id} provisions`),
  router.mount({
    routes: {
      "/?": app.admin.provisioning.show,
      "/artifact": app.admin.provisioning.artifact,
      "/delete": app.admin.provisioning.delete,
    }
  }),
]);
