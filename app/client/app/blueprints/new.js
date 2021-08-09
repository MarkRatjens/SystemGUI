app.blueprints.new = (route) => (a, x) => a.div([
  a.h1("New blueprint"),
  app.jsonForm({
    url: "/api/blueprints",
    method: 'POST',
    route: route,
    scope: 'blueprint',
    form: (f) => [
      f.field({
        key: 'identifier',
        required: true,
      }),
    ],
    digest: (form) => ({model: form.blueprint}),
    success: (blueprint_identifier) => {
      dashboardMenu.$render()
      route.open(`../@${blueprint_identifier}`)
    },
  }),
]);
