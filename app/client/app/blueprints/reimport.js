app.blueprints.reimport = (route) => (a, x) => a.div([
  a.h3('Reimport'),
  app.jsonForm({
    url: `/api/publications/@${route.params.blueprintIdentifier}/import`,
    method: 'POST',
    route: route,
    form: (f) => [
      f.field({
        key: 'identifier',
        value: route.params.blueprintIdentifier,
        as: 'hidden'
      }),
      f.field({
        key: 'force',
        as: 'checkbox',
        label: false,
        control: {label: 'Force'},
      }),
    ],
    digest: (form) => app.compact(form),
    success: () => route.load('output'),
  }),
]);
