app.blueprints.design.blueprint.bindings.new = (route, blueprint) => (a,x) => a.div([
  app.fetch({
    url: '/api/blueprints/list',
    success: (blueprints, el) => [
      app.blueprints.design.blueprint.form({
        route: route,
        scope: 'binding',
        form: (f) => [
          f.field({
            key: 'target_identifier',
            label: 'Target',
            as: 'select',
            placeholder: 'Select blueprint',
            selections: blueprints,
            required: true,
          }),
        ],
        digest: (form) => {
          let binding = app.compact(form.binding)
          if (blueprint.bindings) {
            blueprint.bindings.push(binding)
          } else {
            blueprint.bindings = [binding]
          }
          return {model: blueprint}
        },
        success: () => route.open(`../${blueprint.bindings.length - 1}`)
      }),
    ]
  }),
])
