app.blueprints.new = (route) => (a, x) => a.div([
  a.h1("New blueprint"),
  app.form({
    url: "/api/blueprints",
    method: 'POST',
    scope: 'model',
    form: (f) => [
      f.field({
        key: "identifier",
        required: true,
      }),
      f.buttons({route: route}),
    ],
    success: (blueprint_identifier) => {
      dashboardMenu.$render()
      route.open(`../@${blueprint_identifier}`)
    },
  }),
]);
