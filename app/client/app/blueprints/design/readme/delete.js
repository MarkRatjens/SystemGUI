app.blueprints.design.readme.delete = (route, blueprint) => (a, x) => a.div([
  a.h3(`Delete readme?`),
  app.form({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/readme`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => {
      blueprint.readme = ''
      route.open('../..')
    },
  }),
]);
