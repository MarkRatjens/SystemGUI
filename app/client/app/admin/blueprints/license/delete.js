app.admin.blueprints.license.delete = (route, blueprint) => (a, x) => a.div([
  a.h3(`Delete license?`),
  app.form({
    url: `/api/blueprints/${route.params.blueprintIdentifier}/license`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => {
      blueprint.license = ''
      route.open('../..')
    },
  }),
]);
