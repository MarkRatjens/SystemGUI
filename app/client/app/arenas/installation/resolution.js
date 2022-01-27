app.arenas.installation.resolution = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/summary`,
    ],
    success: ([resolution, summary]) => [
      app.float({
        left: [
          a.h5('Resolution'),
        ],
        right: [
          app.button({
            label: '{} JSON',
            title: 'Raw resolution JSON',
            onclick: () => {
              modal.$open({
                title: `Raw ${route.params.arenaIdentifier}::${route.params.blueprintIdentifier} resolution JSON`,
                size: 'lg',
                body: [resolution],
              })
            },
          }),

        ],
      }),
      a.hr,
      summary.pack.exist ?
      app.arenas.installation.pack(route) :
      app.placeholder('No pack'),
      a.hr,
      summary.provisions.exist ?
      app.arenas.installation.provisions(route) :
      app.placeholder('No provisions'),
    ]
  }),
]
