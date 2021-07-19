app.admin.blueprints.resolve = (route) => (a, x) => a.div([
  a.h1('New resolution'),
  app.fetch({
    url: '/api/arenas',
    success: (arenas, blueprints, el) => [
      app.form({
        url: `/api/blueprints/${route.params.blueprintIdentifier}/resolve`,
        form: (f) => [
          f.field({
            key: 'arena_identifier',
            required: true,
            label: false,
            as: 'select',
            placeholder: 'Select arena',
            selections: arenas,
          }),
          f.buttons({route: route}),
        ],
        success: (resolution_identifier) => route.open(`..`),
      })
    ]
  }),
]);
