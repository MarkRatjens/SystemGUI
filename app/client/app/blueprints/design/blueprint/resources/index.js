app.blueprints.design.blueprint.resources.index = (route, blueprint) => a.div([
app.report({
    object: blueprint,
    report: (r) => r.field({
      key: 'resources',
      as: 'many',
      report: (rr) => [
        a.hr,
        app.clickable(
          [
            rr.field({
              key: 'type',
              horizontal: true,
            }),
            rr.field({
              key: 'identifier',
              horizontal: true,
              placeholder: 'Not specified',
            }),
            rr.field({
              key: 'configuration',
              horizontal: true,
            }),
          ],
          () => route.open(`${rr.index}`),
          {
            clickableTag: {
              class: 'p-2',
            }
          }
        ),
      ]
    })
  }),
  a.hr,
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-list', 'Manage resources'),
      onclick: (e) => route.open('manage'),
      class: 'btn btn-secondary',
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-plus', 'Add resource'),
      onclick: (e) => route.open('new'),
      class: 'btn btn-secondary',
    }),
  ]),
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-check', 'Done'),
      onclick: (e) => route.open('..'),
      class: 'btn btn-primary',
    }),
  ]),
])
