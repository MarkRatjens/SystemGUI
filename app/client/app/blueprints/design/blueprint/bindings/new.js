app.blueprints.design.blueprint.bindings.new = (route, blueprint) => (a,x) => a.div([
  app.fetch({
    url: '/api/blueprints/list',
    success: (blueprints, el) => [
      app.blueprints.design.blueprint.form({
        route: route,
        form: (f) => [
          f.field({
            key: 'target_identifier',
            label: 'Target',
            as: 'select',
            placeholder: 'Select blueprint',
            selections: blueprints,
            required: true,
          }),
          f.field({
            key: 'identifier',
            placeholder: 'Optional binding identifier',
          }),
        ],
        digest: (form) => {
          let binding = {
            target_identifier: form.target_identifier,
            identifier: form.identifier || form.target_identifier,
          }
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
