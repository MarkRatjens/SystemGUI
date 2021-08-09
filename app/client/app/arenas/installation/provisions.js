app.arenas.installation.provisions = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/provisioning/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      // `/api/provisioning/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/artifacts`,
    ],
    success: ([provisions]) => [
      app.float({
        left: [
          a.h5('Provisions'),
        ],
        right: [
          app.button({
            label: '{} JSON',
            title: 'Raw blueprint JSON',
            onclick: () => {
              modal.$open({
                title: `Raw ${route.params.arenaIdentifier}::${route.params.blueprintIdentifier} provisions JSON`,
                size: 'lg',
                body: [provisions],
              })
            },
          }),
        ],
      }),
    ]
  }),
]
