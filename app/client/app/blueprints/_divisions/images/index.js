app.blueprints.images.index = (router, blueprint) => (a,x) => [
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
              rr.field({
                key: 'scripts',
                as: 'one',
                report: (rrr) => [
                  rrr.field({
                    key: 'shell',
                    collection: true,
                    label: false,
                  })
                ]
              }),
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
      label: app.icon('fa fa-list', 'Manage images'),
      onclick: () => router.open('manage'),
      class: 'btn btn-secondary',
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-plus', 'Add image'),
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
