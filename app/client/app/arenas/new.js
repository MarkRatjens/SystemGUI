app.arenas.new = (route) => a.div([
  a.h1('New arena'),
  app.jsonForm({
    url: '/api/arenas',
    method: 'POST',
    scope: 'arena',
    route: route,
    form: (f) => [
      f.field({
        key: 'identifier',
      }),
    ],
    digest: (form) => ({model: form.arena}),
    success: (arenaIdentifier) => {
      route.open(`../@${arenaIdentifier}`)
    },
  }),
])
