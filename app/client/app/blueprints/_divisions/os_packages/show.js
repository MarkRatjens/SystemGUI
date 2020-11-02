app.blueprints.os_packages.show = (router, blueprint) => (a,x) =>
app.report({
  object: blueprint,
  report: (r) => [
    r.field({
      key: 'os_packages',
      label: 'OS packages',
      as: 'one',
      report: (rr) => [
        app.clickable(
          rr.field({
            key: 'adds',
          }),
          () => router.open('adds'),
          {
            clickableTag: {
              class: 'p-2',
            }
          }
        ),
        app.clickable(
          rr.field({
            key: 'removes',
          }),
          () => router.open('removes'),
          {
            clickableTag: {
              class: 'p-2',
            }
          }
        ),
      ]
    }),
    app.button({
      label: app.icon('fa fa-check', 'Done'),
      onclick: () => router.open('..'),
      class: 'btn btn-primary',
    }),
  ]
})
