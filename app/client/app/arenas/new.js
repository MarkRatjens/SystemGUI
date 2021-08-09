app.arenas.new = (route) => (a,x) => a.div([
  a.h1('New arena'),
  app.fetch({
    url: '/api/blueprints/list',
    success: (blueprints, el) => [
      app.jsonForm({
        url: '/api/arenas',
        method: 'POST',
        scope: 'arena',
        route: route,
        form: (f) => [
          f.field({
            key: 'blueprint_identifier',
            label: 'Blueprint',
            as: 'select',
            placeholder: ' ',
            selections: blueprints,
            required: true,
          }),
          f.field({
            key: 'identifier',
          }),
        ],
        digest: (form) => ({model: form.arena}),
        success: (arenaIdentifier) => {
          dashboardMenu.$render()
          route.open(`../@${arenaIdentifier}`)
        },
      }),

    ]
  }),

])
