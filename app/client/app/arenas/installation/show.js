app.arenas.installation.show = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/summary`,
    ],
    success: ([installation, status]) => [
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
      a.hr,

      a.h5([
        app.icon(
          status.resolution.exist ? 'fa fa-check' : 'fa fa-times', null,
          {iconTag: {class: status.resolution.exist ? 'success' : 'error'}}
        ),
        ' Resolution'
      ]),
      status.resolution.exist ?
      app.arenas.installation.resolution(route) :
      null,
    ]
  }),
]
