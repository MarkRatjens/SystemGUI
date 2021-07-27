app.blueprints.design.files.show = (route) => (a, x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/files/@${route.params.fileIdentifier.replace(/::/g, '/')}`,
    success: file => [
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
        onclick: () => route.open('..'),
        class: 'btn btn-primary',
      }),
    ]
  }),
]
