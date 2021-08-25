app.arenas.domain = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/arenas/@${route.params.arenaIdentifier}`,
    ],
    placeholder: app.spinner(`Loading ${route.params.arenaIdentifier}`),
    success: ([arena]) => [
      a.h3('Domain'),
      app.jsonForm({
        url: `/api/arenas/@${route.params.arenaIdentifier}`,
        object: arena,
        route: route,
        form: f => [
          f.field({
            key: 'domain',
            label: false,
            as: 'one',
            form: ff => [
              ff.field({
                key: 'identifier',
                label: false,
                required: true,
                pattern: '^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$',
                invalid: 'Please enter a valid domain name.'
              })
            ]
          }),
        ],
        digest: (form) => {
          arena.domain = form.domain
          return {model: arena}
        },
        success: () => route.open('..'),
      })
    ]
  }),
]
