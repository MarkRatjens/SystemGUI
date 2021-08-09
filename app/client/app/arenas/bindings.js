app.arenas.bindings = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/arenas/@${route.params.arenaIdentifier}`,
      `/api/blueprints/list`,
    ],
    placeholder: app.spinner(`Loading bindings`),
    success: ([arena, blueprints]) => [
      a.h3('Bindings'),
      app.jsonForm({
        url: `/api/arenas/@${route.params.arenaIdentifier}`,
        object: arena,
        route: route,
        form: f => [
          f.field({
            key: 'bindings',
            label: false,
            as: 'table',
            addable: true,
            removeable: true,
            moveable: true,
            collection: true,
            singular: 'binding',
            form: ff => [
              ff.field({
                key: 'target_identifier',
                as: 'select',
                selections: blueprints,
              }),
              ff.field({
                key: 'identifier',
              }),
              ff.field({
                key: 'type',
                as: 'checkbox',
                checked: 'embed',
              }),
              ff.field({
                key: 'configuration',
                as: 'hidden',
              }),
            ]
          }),
        ],
        digest: (form) => {
          arena.bindings = form.bindings
          return {model: arena}
        },
        success: () => route.open('..'),
      })
    ]
  }),
]
