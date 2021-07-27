app.blueprints.design.files.edit = (route) => (a, x) => [
  a.p(route.params.fileIdentifier.replace(/::/g, '/')),
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/files/@${route.params.fileIdentifier.replace(/::/g, '/')}`,
    success: file => [
      app.jsonForm({
        object: {file: file},
        url: `/api/blueprints/@${route.params.blueprintIdentifier}/files/@${route.params.fileIdentifier.replace(/::/g, '/')}`,
        route: route,
        form: f => f.field({
          key: 'file',
          label: false,
          as: 'code',
          mode: {value: app.blueprints.design.files.edit.modes(
            (route.params.fileIdentifier.match(/\.(.+)$/) || [])[1]
          )},
        })
      }),
      a.hr,
      app.float({
        right: [
          app.button({
            label: app.icon('fas fa-trash'),
            title: 'Delete file',
            class: 'btn btn-outline btn-outline-danger',
            onclick: () => route.open('delete'),
          }),
        ],
      }),
    ]
  }),
]
