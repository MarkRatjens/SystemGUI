app.arenas.resolutions.show = (route) => a['app-arenas-resolutions-show']([
  app.button({
    label: app.icon('fas fa-vector-square', 'Arena'),
    onclick: () => route.open('..'),
  }),
  ' ',
  app.button({
    label: app.icon('fas fa-edit', 'Edit'),
    onclick: () => route.open('edit'),
  }),
  ' ',
  app.button({
    label: app.icon('fas fa-hammer', 'Prebuild'),
    onclick: () => route.open('prebuild'),
  }),
  a.hr,
  app.fetch({
    url: [
      `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/summary`,
      '/api/images',
      '/api/capsules',
    ],
    query: [
      {},
      {},
      {
        arena_identifier: route.params.arenaIdentifier,
        blueprint_identifier: route.params.blueprintIdentifier,
      },
      {
        arena_identifier: route.params.arenaIdentifier,
        blueprint_identifier: route.params.blueprintIdentifier,
      }
    ],
    success: ([resolution, summary, images, capsules]) => a.div([
      app.float({
        left: [
        ],
        right: [
          app.button({
            label: '{} JSON',
            title: 'Raw resolution JSON',
            onclick: () => {
              modal.$open({
                title: `Raw ${route.params.arenaIdentifier} > ${route.params.blueprintIdentifier} resolution JSON`,
                body: [
                  a.h5('Model'),
                  resolution,
                  a.h5('State/Summary'),
                  summary,
                ],
              })
            },
          }),
        ],
      }),
      a.p(!summary.pack.exist
        ? [
          a['.error'](app.icon('fas fa-exclamation-circle', 'No pack')),
          ' Please pack arena',
        ]
        : !summary.orchestration.exist
        ? [
          a['.error'](app.icon('fas fa-exclamation-circle', 'No orchestration')),
          ' Please provision arena',
        ]
        : summary.stale
        ? [
          a['.error'](app.icon('fas fa-exclamation-circle', 'Stale')),
          ' Requires edit',
        ]
        : [
          a['.success'](app.icon('fas fa-check-circle', 'Ready')),
          ' Buildable',
        ]
      ),
      // a.hr,
      // x.out(resolution),
      app.arenas.resolutions.images(route, images),
      app.arenas.resolutions.capsules(route, capsules),
    ])
  }),
  a.br,
  app.float({
    left: [
    ],
    right: [
      app.button({
        label: app.icon('fa fa-trash'),
        title: 'Delete resolution',
        class: 'btn btn-outline-danger',
        onclick: () => route.open('delete'),
      }),
    ],
  }),
])
