app.arenas.edit = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/arenas/@${route.params.arenaIdentifier}`,
      `/api/blueprints/list`,
    ],
    placeholder: app.spinner(`Loading ${route.params.arenaIdentifier}`),
    success: ([arena, blueprints]) => [
      a.h3('Edit'),
      app.jsonForm({
        url: `/api/arenas/@${route.params.arenaIdentifier}`,
        object: arena,
        scope: 'arena',
        route: route,
        form: f => [
          f.field({
            key: 'about',
            label: false,
            as: 'one',
            form: ff => [
              ff.field({
                key: 'title',
              }),
              ff.field({
                key: 'explanation',
              }),
            ]
          }),
          f.field({
            key: 'bindings',
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
            ]
          }),
          f.field({
            key: 'configuration',
            as: 'table',
            addable: true,
            removeable: true,
            moveable: true,
            collection: true,
            singular: 'configuration parameter',
            ingest: (value) => Object.keys(value || {}).map(key => ({key: key, value: value[key]})),
            digest: (value) => {
              let configuration = {}
              for (let parameter of value) {
                configuration[parameter.key] = parameter.value
              }
              return configuration
            },
            form: ff => [
              ff.field({
                key: 'key',
              }),
              ff.field({
                key: 'value',
              }),
            ]
          }),
          f.field({
            key: 'domain',
            as: 'one',
            form: ff => [
              ff.field({
                key: 'identifier',
                label: false,
              })
            ]
          }),
          // f.field({
          //   key: 'domains',
          //   collection: true,
          //   singular: 'domain',
          //   required: true,
          //   addable: true,
          //   removeable: true,
          //   moveable: true,
          // }),
        ],
        success: () => {
          dashboardMenu.$render()
          route.open('..')
        },
      })
    ]
  }),
]
