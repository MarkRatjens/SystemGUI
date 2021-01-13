app.admin.blueprints.bindings.index = (router, blueprint) => (a,x) => [
  app.report({
    object: blueprint,
    report: (r) => r.field({
      key: 'bindings',
      as: 'many',
      report: (rr) => [
        app.clickable(
          a['div.p-1']([
            rr.object.identifier ? a.div(rr.object.identifier) : null,
            rr.object.descriptor ? a.div([
              rr.object.descriptor.identifier || null, ' ',
              rr.object.descriptor.repository || a['.error']('No repository'), ' ',
              rr.object.descriptor.branch ? a.small(`${rr.object.descriptor.branch}`) : null,
            ]) : null,
            Object.keys(rr.object.variables || {}).length ?
            x.out(rr.object.variables) : null
          ]),
          () => router.open(`${rr.index}`),
          // {
          //   clickableTag: {
          //     class: 'p-2',
          //   }
          // }
        ),
      ]
    })
  }),
  a.br,
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-list', 'Arrange bindings'),
      onclick: () => router.open('arrange'),
      class: 'btn btn-secondary',
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-plus', 'Add binding'),
      onclick: () => router.open('new'),
      class: 'btn btn-secondary',
    }),
  ]),
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-check', 'Done'),
      onclick: () => router.open('..'),
      class: 'btn btn-primary',
    }),
  ]),
]
