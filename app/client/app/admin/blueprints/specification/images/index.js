app.admin.blueprints.specification.images.index = (route, specification) => (a,x) => a.div([
app.report({
    object: specification,
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
                  key: 'type',
                  as: 'select',
                  selections: {
                    docker: 'Docker',
                    lxd: 'LXD',
                  },
                }),
                rr.field({
                  key: 'image',
                }),
              ],
              // rr.field({
              //   key: 'scripts',
              //   as: 'one',
              //   report: (rrr) => [
              //     rrr.field({
              //       key: 'shell',
              //       collection: true,
              //       label: false,
              //     })
              //   ]
              // }),
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