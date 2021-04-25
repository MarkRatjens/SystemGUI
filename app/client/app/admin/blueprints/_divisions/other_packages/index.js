app.admin.blueprints.other_packages.index = (router, blueprint) => (a,x) => a.div([
  app.report({
    object: blueprint,
    report: (r) => r.field({
      key: 'other_packages',
      as: 'many',
      report: (rr) => [
        app.clickable(
          a['div.p-1']([
            rr.object.target ? a.div([
              rr.object.target.identifier || a._, ' ',
              rr.object.target.repository || a['.error']('No repository'), ' ',
              rr.object.target.branch ? a.small(`${rr.object.target.branch}`) : a._,
            ]) : a._,
          ]),
          () => router.open(`${rr.index}`),
        ),
      ]
    })
  }),
  a.br,
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-list-ol', 'Manage other packages'),
      onclick: () => router.open('manage'),
      class: 'btn btn-secondary',
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-plus', 'Add other package'),
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
