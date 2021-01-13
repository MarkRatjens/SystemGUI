app.admin.blueprints.containers.index = (router, blueprint) => (a,x) => [
  app.report({
    object: blueprint,
    report: (r) => r.field({
      key: 'containers',
      as: 'many',
      report: (rr) => [
        a.hr,
        app.clickable(
          rr.row({
            columns: [
              [
                rr.field({
                  key: 'type',
                }),
                rr.field({
                  key: 'image',
                }),
              ],
              // rr.field({
              //   key: 'ports',
              //   as: 'table',
              //   report: (rrr) => [
              //     rrr.field({
              //       key: 'protocol',
              //       label: false,
              //     }),
              //     rrr.field({
              //       key: 'port',
              //       label: false,
              //     }),
              //   ]
              // }),
            ]
          }),
          () => router.open(`${rr.index}`),
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
      label: app.icon('fa fa-list', 'Manage containers'),
      onclick: () => router.open('manage'),
      class: 'btn btn-secondary',
    }),
    ' ',    app.button({
      label: app.icon('fa fa-plus', 'Add container'),
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
