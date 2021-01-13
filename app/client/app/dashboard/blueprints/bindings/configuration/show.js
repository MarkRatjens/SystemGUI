app.dashboard.blueprints.bindings.configuration.show = (router, resolution, binding, targetBlueprint) => [
  app.report({
    object: binding,
    report: (r) => [
      r.field({
        key: 'configuration',
        as: 'one',
        label: false,
        report: (rr) => Object.keys(binding.configuration || {}).map(
          (parameter) => rr.field({
            key: parameter,
            label: parameter,
            horizontal: true,
          })
        )
      }),
      app.float({
        right: app.button({
          label: app.icon('fa fa-edit'),
          onclick: () => router.open(`/blueprints/${router.params.blueprint_id}/bindings/${targetBlueprint.identifier}`),
        }),
      }),
    ],
  }),
]
