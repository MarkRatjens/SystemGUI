app.admin.blueprints.blueprint = (route) => (a, x) => a.div([
//   app.closeOld(() => route.open('/admin/blueprints')),
  app.close(route),
  a.h1(`${route.params.blueprintIdentifier} blueprint`),
  route.mount({
    routes: {
      "/delete": app.admin.blueprints.delete,
      "/export": app.admin.blueprints.export,
      '*': app.admin.blueprints.show,

      // "/specification/?*": app.admin.blueprints.specification,
      // "/icon/?*": app.admin.blueprints.icon,
      // "*": app.admin.blueprints.show,
    },
  }),

]);
