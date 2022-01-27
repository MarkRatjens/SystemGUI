app.arenas.connect = (route) => (a,x) => [
  app.fetch({
    url: `/api/arenas/list`,
    placeholder: app.spinner(`Loading arenas`),
    success: (arenas) => [
      a.h3('Bind arena'),
      app.jsonForm({
        url: `/api/arenas/@${route.params.arenaIdentifier}/connect`,
        route: route,
        method: 'POST',
        form: f => [
          f.field({
            key: 'target_identifier',
            as: 'select',
            label: false,
            placeholder: 'Select an arena',
            selections: arenas,
            required: true,
          }),
        ],
        success: (result) => {
          // dashboardMenu.$render()
          route.open('..')
        },
      })
    ]
  }),
]
