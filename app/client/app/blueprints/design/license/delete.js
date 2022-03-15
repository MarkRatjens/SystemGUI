app.blueprints.design.license.delete = (route, blueprint) => a.div([
  a.h3(`Delete license?`),
  app.jsonForm({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/license`,
    method: "DELETE",
    route: route,
    success: () => {
      blueprint.license = ''
      route.open('../..')
    },
  }),
]);
