app.arenas.domains = (route) => a.div([
  a.h3('Arena domains'),
  app.fetch({
    url: [
      `/api/arenas/@${route.params.arenaIdentifier}`,
      `/api/domains`,
    ],
    placeholder: app.spinner(`Loading domains`),
    success: ([arena, domains]) => a.div([
      app.jsonForm({
        url: `/api/arenas/@${route.params.arenaIdentifier}`,
        object: arena,
        route: route,
        form: f => [
          f.field({
            key: 'domains',
            label: false,
            as: 'table',
            singular: 'domain',
            addable: true,
            removeable: true,
            moveable: true,
            collection: true,
            form: ff => [
              ff.field({
                key: 'identifier',
                label: 'Domain name',
                as: 'select',
                placeholder: 'Select a domain',
                selections: domains.map(domain => domain.identifier),
                required: true,
              }),
              ff.field({
                key: 'primary',
                as: 'checkbox',
                ingest: (value) => value ? 'on' : '',
                digest: (value) => value == 'on',
              }),
            ]
          }),
        ],
        digest: (form) => {
          arena.domains = form.domains
          return {model: arena}
        },
        success: () => route.open('..'),
      })
    ])
  }),
])
