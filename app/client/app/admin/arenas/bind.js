app.admin.arenas.bind = (route) => (a,x) => [
  a.h3('Bind blueprint'),
  app.fetch({
    url: `/api/blueprints/list`,
    placeholder: app.spinner('Loading blueprints'),
    success: (blueprint_identifiers) => a.div([
      app.form({
        url: `/api/arena/${route.params.arenaIdentifier}/bind`,
        scope: 'blueprint',
        form: (f) => [
          f.field({
            key: 'identifier',
            label: 'Blueprint',
            as: 'select',
            selections: blueprint_identifiers,
          }),
          f.buttons({
            route: route,
          })
        ],
        success: () => route.open(`..`),
      }),
    ])
  })
];
