app.blueprints.design.files.index = (route) => (a, x) => [
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => route.open('new'),
  }),
  a.hr,
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/files`,
    success: files => app.report({
      object: {files: files},
      report: r => r.field({
        key: 'files',
        label: false,
        as: 'many',
        report: (rr) => [
          app.clickable(
            a['div.p-1']([
              rr.object,
            ]),
            () => route.open(`@${rr.object.replace(/\//g, '::')}`),
          ),
        ]
      })
    })
  }),
]
