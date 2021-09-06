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
      }),
      f.field({
        key: 'model',
        as: 'one',
        label: false,
        form: (ff) => [
          f.field({
            key: 'force',
            as: 'checkbox',
            label: false,
            control: {label: 'Force'},
          }),
        ]
      }),
    ],
    success: () => route.load('output'),
  }),
]);
