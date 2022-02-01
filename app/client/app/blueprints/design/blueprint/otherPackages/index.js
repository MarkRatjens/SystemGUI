app.blueprints.design.blueprint.otherPackages.index = (route, blueprint) => (a,x) => a.div([
  app.report({
    object: blueprint,
    report: (r) => r.field({
      key: 'other_packages',
      as: 'many',
      report: (rr) => [
        app.clickable(
          a['div.p-1']([
            rr.object.target ? a.div([
              rr.object.target.identifier || null, ' ',
              rr.object.target.repository || a['.error']('No repository'), ' ',
              rr.object.target.branch ? a.small(`${rr.object.target.branch}`) : null,
            ]) : null,
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
      onclick: (e, el) => route.open('manage'),
      class: 'btn btn-secondary',
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-plus', 'Add other package'),
      onclick: (e, el) => route.open('new'),
      class: 'btn btn-secondary',
    }),
  ]),
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-check', 'Done'),
      onclick: (e, el) => route.open('..'),
      class: 'btn btn-primary',
    }),
  ]),
])
