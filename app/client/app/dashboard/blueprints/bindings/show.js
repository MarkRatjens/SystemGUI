app.dashboard.blueprints.bindings.show = (router, resolution, binding) => (a, x) => [
  app.http({
    url: `/api/import`,
    method: 'POST',
    query: {
      space: 'blueprints',
      descriptor: binding.descriptor
    },
    // placeholder: app.spinner('Loading binding target'),
    success: (targetBlueprint, el) => {
      el.$nodes = [
        app.collapse({
          label: targetBlueprint.identifier,
          body: a.div(
            [
              app.admin.blueprints.title.preview(router, targetBlueprint),
              app.admin.blueprints.description.preview(router, targetBlueprint),
              app.dashboard.blueprints.bindings.configuration(router, resolution, binding, targetBlueprint),
            ],
            {
              class: 'mb-4 p-2 border-left',
            }
          ),
          collapseTag: {
            class: 'd-block'
          }
        })
      ]
    }
  }),
];
