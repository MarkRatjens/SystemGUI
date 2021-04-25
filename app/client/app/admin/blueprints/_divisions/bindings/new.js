app.admin.blueprints.bindings.new = (router, blueprint) => (a,x) => a.div([
  app.fetch({
    url: '/api/blueprints',
    success: (blueprints, el) => {
      el.$nodes = [
        app.admin.blueprints.form({
          router: router,
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
              identifier: form.target,
              target_identifier: form.target,
            }
            if (blueprint.bindings) {
              blueprint.bindings.push(binding)
            } else {
              blueprint.bindings = [binding]
            }
            return blueprint
          },
        }),
      ]
    }
  }),
])
