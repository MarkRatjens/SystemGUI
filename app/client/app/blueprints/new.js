app.blueprints.new = (route) => a.div([
  a.h3("New blueprint"),
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
      route.open(`../@${blueprint_identifier}/design`)
    },
  }),
]);
