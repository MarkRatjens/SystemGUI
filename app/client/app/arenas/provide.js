app.arenas.provide = (route) => a.div([
  app.fetch({
    url: [
      `/api/arenas/@${route.params.arenaIdentifier}`,
      `/api/providers/list`,
    ],
    placeholder: app.spinner(`Loading ${route.params.arenaIdentifier}`),
    success: ([arena, providers]) => a.div([
      a.h3('Provide arena role'),
      app.jsonForm({
        url: `/api/arenas/@${route.params.arenaIdentifier}/provide`,
        route: route,
        method: 'POST',
        form: f => [
          f.field({
            key: 'role_identifier',
            as: 'select',
            placeholder: 'Select role',
            required: true,
            selections: {
              packing: 'Packing',
              orchestration: 'Orchestration',
              runtime: 'Runtime',
            },
          }),
          f.field({
            key: 'provider_identifier',
            as: 'select',
            placeholder: 'Select provider',
            required: true,
            selections: providers,
          }),
        ],
        success: () => {
          route.open('..')
        },
      })
    ])
  }),
])
