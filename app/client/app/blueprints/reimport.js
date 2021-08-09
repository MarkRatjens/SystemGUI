app.blueprints.reimport = (route) => (a, x) => a.div([
  a.h3("Reimport blueprint"),
  app.jsonForm({
    url: `/api/publications/import`,
    method: 'POST',
    route: route,
    form: (f) => [
      f.field({
        key: 'identifier',
        value: route.params.blueprintIdentifier,
        as: 'hidden'
      })
    ],
  }),
]);
