app.admin.blueprints.specification.bindings.new = (route, specification) => (a,x) => a.div([
  app.fetch({
    url: '/api/blueprints',
    success: (blueprints, el) => {
      el.$nodes = [
        app.admin.blueprints.specification.form({
          route: route,
          form: (f) => [
            f.field({
              key: 'target',
              as: 'select',
              placeholder: 'Select blueprint',
              selections: blueprints,
            }),
          ],
          update: (form) => {
            let binding = {
              target_identifier: form.target,
            }
            if (specification.bindings) {
              specification.bindings.push(binding)
            } else {
              specification.bindings = [binding]
            }
            return specification
          },
          success: () => route.open(`../${specification.bindings.length - 1}`) 
        }),
      ]
    }
  }),
])
