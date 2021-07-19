app.blueprints.reimport = (route) => (a, x) => a.div([
  a.h3("Reimport blueprint"),
  app.form({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/reimport`,
    form: (f) => [
      f.buttons({route: route}),
    ],
    success: (blueprint_identifier) => {
      route.open('..')
    },
  }),
]);
