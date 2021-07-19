app.blueprints.design.specification.otherPackages.index = (route, specification) => (a,x) => a.div([
  app.report({
    object: specification,
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
          () => route.open(`${rr.index}`),
        ),
      ]
    })
  }),
  a.br,
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-list-ol', 'Manage other packages'),
      onclick: () => route.open('manage'),
      class: 'btn btn-secondary',
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-plus', 'Add other package'),
      onclick: () => route.open('new'),
      class: 'btn btn-secondary',
    }),
  ]),
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-check', 'Done'),
      onclick: () => route.open('..'),
      class: 'btn btn-primary',
    }),
  ]),
])
