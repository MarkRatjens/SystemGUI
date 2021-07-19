app.admin.installations.installation = (route) => (a, x) => a.div([
//   app.closeOld(() => route.open('/admin/installations')),
  app.close(route),
  a.h1(`${route.params.installationIdentifier} installation`),
  route.mount({
    routes: {
      "/edit*": app.admin.installations.edit,
      "/delete": app.admin.installations.delete,
      "/?": app.admin.installations.show,
    }
  }),
]);
