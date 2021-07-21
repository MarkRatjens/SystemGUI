app.arenas.show = (route) => (a,x) => [
  app.fetch({
    url: `/api/arenas/@${route.params.arenaIdentifier}`,
    placeholder: app.spinner(`Loading ${route.params.arenaIdentifier}`),
    success: (arena) => [
      app.float({
        left: [
          arena.about ? a.i([
            arena.about.title ? a.h3([arena.about.title]) : null,
            arena.about.explanation ? a.p(arena.about.explanation) : null,
          ]) : null,
        ],
        right: [
          app.button({
            label: app.icon('fas fa-edit', 'Edit'),
            onclick: () => route.open('edit'),
          }),
        ],
      }),
      app.report({
        object: arena,
        report: r => [
          r.field({
            key: 'bindings',
            collection: true,
            ingest: value => value.map(item => item.target_identifier),
          }),
          r.field({
            key: 'configuration',
            as: 'table',
            ingest: value => Object.keys(value).map(key => ({key: key, value: value[key]})),
            report: rr => [
              rr.field({
                key: 'key',
              }),
              rr.field({
                key: 'value',
              }),
            ],
          }),
          r.field({
            key: 'domain',
            as: 'one',
            report: rr => [
              rr.field({
                key: 'identifier',
                label: false,
              }),
            ]
          }),
        ]
      }),
      a.hr,
      app.float({
       right: [
         app.button({
           label: app.icon('fa fa-trash'),
           title: 'Delete arena',
           class: 'btn btn-outline-danger',
           onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/delete`),
         }),
       ],
     }),
    ]
  }),
]
