app.blueprints.design.resolve = (route) => a.div([
  a.h3('New resolution'),
  app.fetch({
    url: '/api/arenas',
    success: (arenas, blueprints, el) => a.div([
      app.jsonForm({
        url: `/api/blueprints/@${route.params.blueprintIdentifier}/resolve`,
        route: route,
        form: (f) => [
          f.field({
            key: 'arena_identifier',
            required: true,
            label: false,
            as: 'select',
            placeholder: 'Select arena',
            selections: arenas,
          }),
        ],
        success: (resolution_identifier) => route.open(`..`),
      })
    ])
  }),
]);
