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
            onclick: (el) => () => route.open('artifact'),
          }),
          ' ',
          app.button({
            label: app.icon('fas fa-hammer', 'Build'),
            onclick: (el) => () => route.open('build'),
          }),
          ' ',
          // summary.log.exist ? app.button({
          //   label: app.icon('fas fa-file', 'Log'),
          //   onclick: (el) => () => route.open('log'),
          // }) : null,
          // ' ',
          app.button({
            label: '{} JSON',
            title: 'Raw blueprint JSON',
            onclick: (el) => () => {
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
