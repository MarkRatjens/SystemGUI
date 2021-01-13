app.admin.blueprints.bindings.binding.configuration = (router, blueprint) => {

  let binding = blueprint.bindings[router.params.binding_id]

  return app.http({
    url: `/api/import`,
    method: 'POST',
    query: {
      space: 'blueprints',
      descriptor: binding.descriptor
    },
    placeholder: app.spinner('Loading binding target'),
    success: (boundBlueprint, el) => {

      let binding_anchor = boundBlueprint.binding_anchor || {}
      let keys = Object.keys(binding_anchor || {})

      el.$nodes = [
        // boundBlueprint,
        app.admin.blueprints.form({
          router: router,
          object: binding,
          form: f => [
            f.field({
              key: 'configuration',
              as: 'one',
              form: (ff) => keys.map((key) =>
                ff.field({
                  key: key,
                  value: binding_anchor[key],
                })
              )
            })

          ],
          update: (form) => {
            let configuration = form.configuration
            app.compact(configuration)
            if (Object.keys(configuration).length) {
              binding.configuration = configuration
            } else {
              delete binding.configuration
            }
            return blueprint;
          },
        })
      ]
    }
  })

}
