app.arenas.installation.pack = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/artifacts`,
    ],
    success: ([pack, artifacts]) => [
      app.float({
        left: [
          a.h5('Pack'),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-hammer', 'Commit'),
            onclick: () => route.open('commit'),
          }),
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
