app.admin.domains.new = (route) => (a,x) => a.div([
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
          onclick: () => route.open('..'),
        },
      }),
    ],
    success: (domain) => route.open(`../${domain.identifier}`),
  }),
])
