app.spaces.arenas.new = (router) => (a,x) => a.div([
  a.h1('New arena'),
  app.form({
    url: '/api/arenas',
    form: (f) => [
      f.field({
        key: 'identifier',
        required: true,
      }),
      f.buttons({
        cancel: {
          onclick: () => router.open('..'),
        },
      }),
    ],
    success: (arenaIdentifier) => router.open(`../${arenaIdentifier}`),
  }),
])
