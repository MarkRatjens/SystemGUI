app.blueprints.reimport = (route) => (a, x) => a.div([
  a.h3("Reimport blueprint"),
  app.form({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/reimport`,
    method: 'POST',
    form: (f) => [
      f.buttons({route: route}),
    ],
    success: () => route.open('..'),
  }),
]);
