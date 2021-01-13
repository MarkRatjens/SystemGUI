app.admin.domains.new = (router) => (a,x) => [
  a.h1('New domain'),
  app.form({
    url: '/api/domains',
    form: (f) => [
      f.field({
        key: 'domain',
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
    success: (domain) => router.open(`../${domain.identifier}`),
  }),
]
