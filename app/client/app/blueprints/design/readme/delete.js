app.blueprints.design.readme.delete = (route, blueprint) => a.div([
  a.h3(`Delete readme?`),
  app.jsonForm({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/readme`,
    method: "DELETE",
    route: route,
    success: () => {
      blueprint.readme = ''
      route.open('../..')
    },
  }),
]);
