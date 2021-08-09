app.arenas.installation.domain = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
    ],
    placeholder: app.spinner('Loading domain'),
    success: ([installation]) => [
      a.h3('Domain'),
      app.jsonForm({
        url: `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
        object: installation,
        route: route,
        form: f => [
          f.field({
            key: 'domain',
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
          installation.domain = form.domain
          return {model: installation}
        },
        success: () => route.open('..'),
      })
    ]
  }),
]
