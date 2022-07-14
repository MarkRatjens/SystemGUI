app.arenas.bind = (route) => a.div([
  app.fetch({
    url: `/api/blueprints/list`,
    // url: `/api/arenas/@${route.params.arenaIdentifier}/bindables`,
    placeholder: app.spinner(`Loading blueprints`),
    success: (blueprints) => a.div([
      a.h3('Stage blueprint'),
      app.jsonForm({
        url: `/api/arenas/@${route.params.arenaIdentifier}/bind`,
        route: route,
        method: 'POST',
        form: f => [
          f.field({
            key: 'blueprint_identifier',
            as: 'select',
            label: false,
            placeholder: 'Select a blueprint',
            selections: blueprints,
            required: true,
          }),
        ],
        success: (result) => {
          route.open('..')
        },
      })
    ])
  }),
])
