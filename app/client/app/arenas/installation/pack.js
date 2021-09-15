app.arenas.installation.pack = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/summary`,
    ],
    success: ([pack, summary]) => [
      app.float({
        left: [
          a.h5('Pack'),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-code', 'Atrifact'),
            onclick: () => route.open('artifact'),
          }),
          ' ',
          app.button({
            label: app.icon('fas fa-hammer', 'Build'),
            onclick: () => route.open('build'),
          }),
          ' ',
          summary.log.exist ? app.button({
            label: app.icon('fas fa-file', 'Log'),
            onclick: () => route.open('log'),
          }) : null,
          ' ',
          app.button({
            label: '{} JSON',
            title: 'Raw blueprint JSON',
            onclick: () => {
              modal.$open({
                title: `Raw ${route.params.arenaIdentifier}::${route.params.blueprintIdentifier} pack JSON`,
                size: 'lg',
                body: [pack],
              })
            },
          }),
        ],
      }),
    ]
  }),
]
