app.arenas.blueprints = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/arenas/@${route.params.arenaIdentifier}`,
      `/api/blueprints/list`,
    ],
    placeholder: app.spinner(`Loading blueprints`),
    success: ([arena, blueprints]) => [
      a.h3('Blueprints'),
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
            singular: 'blueprint',
            form: ff => [
              ff.field({
                key: 'target_identifier',
                as: 'select',
                label: false,
                placeholder: ' ',
                selections: blueprints,
                required: true,
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
