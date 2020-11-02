app.blueprints.bindings.binding.show = (router, blueprint) => (a,x) => [
  app.report({
    object: blueprint.bindings[router.params.binding_id],
    report: (r) => [
      app.clickable(
        r.field({
          key: 'identifier',
        }),
        () => router.open('identifier'),
        {
          clickableTag: {
            class: 'p-2 mb-1',
          }
        }
      ),
      app.clickable(
        [
          r.field({
            key: 'descriptor',
            as: 'one',
            report: (rr) => [
              rr.field({
                key: 'identifier',
              }),
              rr.field({
                key: 'repository',
              }),
              rr.field({
                key: 'branch',
              }),
            ]
          }),
        ],
        () => router.open('descriptor'),
        {
          clickableTag: {
            class: 'p-2 mb-1',
          }
        }
      ),
      app.clickable(
        r.field({
          key: 'variables',
          as: 'output',
        }),
        () => router.open('variables'),
        {
          clickableTag: {
            class: 'p-2 mb-1',
          }
        }
      ),
    ]
  }),
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-check', 'Done'),
      onclick: () => router.open('..'),
      class: 'btn btn-primary',
    }),
  ]),
]
