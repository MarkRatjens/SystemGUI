app.arenas.new = (route) => (a,x) => a.div([
  a.h1('New arena'),
  app.jsonForm({
    url: '/api/arenas',
    method: 'POST',
    scope: 'arena',
    route: route,
    form: (f) => [
      f.field({
        key: 'identifier',
        required: true,
      }),
    ],
    success: (arenaIdentifier) => {
      dashboardMenu.$render()
      route.open(`../@${arenaIdentifier}`)
    },
  }),
])