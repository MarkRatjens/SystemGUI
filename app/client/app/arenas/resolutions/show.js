app.arenas.resolutions.show = (route) => a['app-arenas-resolutions-show']([
  app.fetch({
    url: [
      `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/summary`,
      `/api/blueprints/@${route.params.blueprintIdentifier}/form`,
    ],
    success: ([resolution, summary, form]) => a.div([
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
      a.hr,
      x.out(resolution),
      a.hr,
      app.float({
        left: [
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
  }),
])
