app.admin.blueprints.bindings.index = (router, blueprint) => (a,x) => a.div([
  app.report({
    object: blueprint,
    report: (r) => r.field({
      key: 'bindings',
      as: 'many',
      report: (rr) => [
        app.clickable(
          a['div.p-1']([
            rr.object.identifier,
            ' ',
            rr.object.identifier != rr.object.target_identifier ? rr.object.target_identifier : a._,
            ' ',
            rr.object.type == 'embed' ? a.small('embed') : a._,
          ]),
          () => router.open(`${rr.index}`),
        ),
      ]
    })
  }),
  a.br,
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-list', 'Manage bindings'),
      onclick: () => router.open('manage'),
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
])
