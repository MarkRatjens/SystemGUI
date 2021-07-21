app.blueprints.design.specification.bindings.new = (route, specification) => (a,x) => a.div([
  app.fetch({
    url: '/api/blueprints/list',
    success: (blueprints, el) => {
      el.$nodes = [
        app.blueprints.design.specification.form({
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
            if (specification.bindings) {
              specification.bindings.push(binding)
            } else {
              specification.bindings = [binding]
            }
            return {specification: specification}
          },
          success: () => route.open(`../${specification.bindings.length - 1}`)
        }),
      ]
    }
  }),
])
