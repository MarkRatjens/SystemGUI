app.blueprints.design.icon.delete = (route, blueprint) => a.div([
  a.h3(`Delete icon?`),
  app.jsonForm({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/icon`,
    method: "DELETE",
    route: route,
    success: () => route.open('..'),
  }),
]);
