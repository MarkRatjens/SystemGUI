app.blueprints.bindings.binding.variables = (router, blueprint) => {

  let binding = blueprint.bindings[router.params.binding_id]

  return app.http({
    url: `/api/import`,
    method: 'POST',
    query: {
      space: 'blueprints',
      descriptor: binding.descriptor
    },
    placeholder: app.spinner('Loading binding anchor'),
    success: (targetBlueprint, el) => {

      let anchor = targetBlueprint.binding_anchor || {}
      let variableKeys = Object.keys(anchor.variables || {})

      el.$nodes = [
        app.blueprints.form({
          router: router,
          object: binding,
          form: f => [

            f.field({
              key: 'variables',
              as: 'one',
              form: (ff) => variableKeys.map((key) => ff.field({key: key}))
            })

          ],
          update: (form) => {
            let variables = form.variables
            ax.x.lib.compact(variables)
            if (Object.keys(variables).length) {
              binding.variables = variables
            } else {
              delete binding.variables
            }
            return blueprint;
          },
        })
      ]
    }
  })

}
