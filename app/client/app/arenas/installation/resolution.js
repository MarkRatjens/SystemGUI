app.arenas.installation.resolution = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/status`,
    ],
    success: ([status]) => [
      a.h5([
        app.icon(
          status.pack.exist ? 'fa fa-check' : 'fa fa-times', null,
          {iconTag: {class: status.pack.exist ? 'success' : 'error'}}
        ),
        ' Pack'
      ]),
      a.h5([
        app.icon(
          status.provisions.exist ? 'fa fa-check' : 'fa fa-times', null,
          {iconTag: {class: status.provisions.exist ? 'success' : 'error'}}
        ),
        ' Provisions'
      ]),




      // status,
      // status.resolution.exist ? [
      //   app.button({
      //     label: app.icon('fas fa-tools', 'Build'),
      //     onclick: () => route.open('build'),
      //   }),
      // ] : null,
    ]
  }),
]
