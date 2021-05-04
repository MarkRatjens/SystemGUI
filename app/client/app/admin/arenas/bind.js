app.admin.arenas.bind = (router) => (a,x) => [
  a.h3('Bind blueprint'),
  app.fetch({
    url: `/api/blueprints`,
    placeholder: app.spinner('Loading blueprints'),
    success: (blueprint_identifiers) => a.div([
      app.form({
        url: `/api/arenas/${router.params.arenaIdentifier}/bind`,
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
