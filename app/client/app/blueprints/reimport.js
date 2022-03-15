app.blueprints.reimport = (route) => a.div([
  a.h3('Reimport'),
  a.p('Are you sure that you want to reimport this blueprint and overwrite any local changes?'),
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
    ],
    digest: (form) => app.compact(form),
    success: () => route.load('output'),
  }),
]);
