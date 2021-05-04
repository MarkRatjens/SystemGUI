app.admin.blueprints.resolve = (router) => (a, x) => a.div([
  a.h1('New resolution'),
  app.fetch({
    url: '/api/arenas',
    success: (arenas, blueprints, el) => [
      app.form({
        url: `/api/blueprints/${router.params.blueprintIdentifier}/resolve`,
        form: (f) => [
          f.field({
            key: 'arena_identifier',
            required: true,
            label: false,
            as: 'select',
            placeholder: 'Select arena',
            selections: arenas,
          }),
          f.buttons({router: router}),
        ],
        success: (resolution_identifier) => router.open(`..`),
      })
    ]
  }),
]);
