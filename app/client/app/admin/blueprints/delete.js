app.admin.blueprints.delete = (route) => (a, x) => a.div([
  a.h3(`Delete blueprint?`),
  app.form({
    url: `/api/blueprints/${route.params.blueprintIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('../..'),
  }),
]);
