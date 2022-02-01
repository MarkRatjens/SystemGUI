app.blueprints.design.blueprint.bindings.index = (route, blueprint) => (a,x) => a.div([
  app.report({
    object: blueprint,
    report: (r) => r.field({
      key: 'bindings',
      as: 'many',
      report: (rr) => [
        app.clickable(
          a['div.p-1']([
            app.bindingLabel(rr.object),
          ]),
          () => route.open(`${rr.index}`),
        ),
      ]
    })
  }),
  a.br,
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-list', 'Manage bindings'),
      onclick: (e, el) => route.open('manage'),
      class: 'btn btn-secondary',
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-plus', 'Add binding'),
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
