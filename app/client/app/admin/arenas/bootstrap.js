app.admin.arenas.bootstrap = (router) => (a,x) => [
  a.h3('Bootstrap'),
  app.fetch({
    url: `/api/blueprints`,
    placeholder: app.spinner('Loading blueprints'),
    success: (blueprint_identifiers) => a.div([
      app.form({
        url: `/api/arenas/${router.params.arena_id}/bootstrap`,
        form: (f) => [
          f.field({
            key: 'blueprint_identifier',
            label: 'Blueprint',
            as: 'select',
            selections: blueprint_identifiers,
          }),
          f.buttons({
            router: router,
          })
        ],
        success: () => router.open(`..`),
      }),
    ])
  })
];
