app.blueprints.reimport = (route) => (a, x) => a.div([
  a.h3('Reimport'),
  app.jsonForm({
    url: `/api/publications/@${route.params.blueprintIdentifier}/reimport`,
    method: 'POST',
    route: route,
    form: (f) => [
      f.field({
        key: 'identifier',
        value: route.params.blueprintIdentifier,
        as: 'hidden'
      })
    ],
    success: () => route.open('output'),
  }),
]);
