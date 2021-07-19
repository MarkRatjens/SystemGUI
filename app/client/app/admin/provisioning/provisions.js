app.admin.provisioning.provisions = (route) => (a, x) => a.div([
//   app.closeOld(() => route.open('/admin/provisioning')),
  app.close(route),
  a.h1(`${route.params.resolutionIdentifier} provisions`),
  route.mount({
    routes: {
      "/?": app.admin.provisioning.show,
      "/artifact": app.admin.provisioning.artifact,
      "/delete": app.admin.provisioning.delete,
    }
  }),
]);
