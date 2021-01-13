app.admin.arenas.new = (router) => (a,x) => [
  a.h1('New arena'),
  app.form({
    url: '/api/arenas',
    form: (f) => [
      f.field({
        key: 'arena',
        label: false,
        as: 'one',
        form: (ff) => [
          ff.field({
            key: 'identifier'
          })
        ]
      }),
      f.buttons({
        cancel: {
          onclick: () => router.open('..'),
        },
      }),
    ],
    success: (arena) => router.open(`../${arena.identifier}`),
  }),
]
