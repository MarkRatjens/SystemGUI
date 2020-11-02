app.packs.new = (router) => (a,x) => [
  a.h1('New pack'),
  app.form({
    url: '/api/packs',
    form: (f) => [
      f.field({
        key: 'pack',
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
    success: (pack) => router.open(`../${pack.identifier}`),
  }),
]
