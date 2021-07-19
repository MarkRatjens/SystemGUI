app.admin.arenas.new = (route) => (a,x) => a.div([
  a.h1('New arena'),
  app.form({
    url: '/api/arenas',
    scope: 'arena',
    form: (f) => [
      f.field({
        key: 'identifier',
        required: true,
      }),
      f.buttons({
        cancel: {
          onclick: () => route.open('..'),
        },
      }),
    ],
    success: (arenaIdentifier) => route.open(`../${arenaIdentifier}`),
  }),
])
