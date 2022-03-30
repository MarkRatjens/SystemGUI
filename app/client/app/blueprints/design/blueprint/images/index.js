app.blueprints.design.blueprint.images.index = (route, blueprint) => a.div([
app.report({
    object: blueprint,
    report: (r) => r.field({
      key: 'images',
      as: 'many',
      report: (rr) => [
        a.hr,
        app.clickable(
          [
            rr.field({
              key: 'runtimes',
              horizontal: true,
              collection: true,
            }),
            rr.field({
              key: 'identifier',
              horizontal: true,
            }),
            rr.field({
              key: 'target_identifier',
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
      label: app.icon('fa fa-list', 'Manage images'),
      onclick: (e) => route.open('manage'),
      class: 'btn btn-secondary',
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-plus', 'Add image'),
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
