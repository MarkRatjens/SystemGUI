app.admin.blueprints.icon.delete = (route, blueprint) => (a, x) => a.div([
  a.h3(`Delete icon?`),
  app.form({
    url: `/api/blueprints/${route.params.blueprintIdentifier}/icon`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => {
      route.open('../..')
    },
  }),
]);
