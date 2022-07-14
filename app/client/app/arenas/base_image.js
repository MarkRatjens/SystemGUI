app.arenas.base_image = (route) => a.div([
  app.fetch({
    url: [
      // `/api/arenas/@${route.params.arenaIdentifier}`,
      // `/api/providers/list`,
    ],
    placeholder: app.spinner(`Loading ${route.params.arenaIdentifier}`),
    success: ([arena, providers]) => a.div([
      a.h3('Base image'),
      app.jsonForm({
        url: `/api/arenas/@${route.params.arenaIdentifier}/build_from`,
        route: route,
        method: 'POST',
        form: f => [
          f.field({
            key: 'image_identifier',
            // placeholder: 'Select provider',
            required: true,
          }),
        ],
        success: () => {
          route.open('..')
        },
      })
    ])
  }),
])
