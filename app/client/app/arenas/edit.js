app.arenas.edit = (route) => a.div([
  app.fetch({
    url: [
      `/api/arenas/@${route.params.arenaIdentifier}`,
      `/api/blueprints/list`,
    ],
    placeholder: app.spinner(`Loading ${route.params.arenaIdentifier}`),
    success: ([arena, blueprints]) => a.div([
      a.h3('Edit arena'),
      app.jsonForm({
        url: `/api/arenas/@${route.params.arenaIdentifier}`,
        object: arena,
        route: route,
        form: f => [
          f.field({
            key: 'about',
            label: false,
            as: 'one',
            form: ff => [
              ff.field({
                key: 'title',
              }),
              ff.field({
                key: 'explanation',
              }),
            ]
          }),
        ],
        digest: (form) => {
          arena.about = app.compact(form.about)
          return {model: arena}
        },
        success: () => {
          // dashboardMenu.$render()
          route.open('..')
        },
      })
    ])
  }),
])
