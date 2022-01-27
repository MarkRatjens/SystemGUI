app.blueprints.design.blueprint.images.index = (route, blueprint) => (a,x) => a.div([
app.report({
    object: blueprint,
    report: (r) => r.field({
      key: 'images',
      as: 'many',
      report: (rr) => [
        a.hr,
        app.clickable(
          rr.row({
            columns: [
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
                  key: 'output_identifier',
                  horizontal: true,
                }),
              ],
            ]
          }),
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
      onclick: () => route.open('manage'),
      class: 'btn btn-secondary',
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-plus', 'Add image'),
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
