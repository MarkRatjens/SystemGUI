app.arenas.installation.show = (route) => (a,x) => [
  app.fetch({
    url: `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
    success: installation => [
      app.float({
        left: [
          x.out(installation.input),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-edit', 'Edit'),
            onclick: () => route.open('edit'),
          }),
        ],
      }),
      // a.hr,
      // app.button({
      //   label: app.icon('fas fa-tools', 'Build'),
      //   onclick: () => route.open('build'),
      // }),
    ]
  }),
]
