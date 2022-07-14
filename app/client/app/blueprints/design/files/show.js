app.blueprints.design.files.show = (route) => a.div([
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/files/@${route.params.fileIdentifier.replace(/::/g, '/')}`,
    success: file => a.div([
      app.report({
        object: {file: file},
        report: r => r.field({
          key: 'file',
          label: false,
          as: 'code',
        })
      }),
      app.button({
        label: app.icon('fa fa-check', 'Done'),
        onclick: (e) => route.open('..'),
        class: 'btn btn-primary',
      }),
    ])
  }),
])
