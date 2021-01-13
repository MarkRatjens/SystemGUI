app.admin.blueprints.bindings.binding.type = (router, blueprint) => {

  let binding = blueprint.bindings[router.params.binding_id]

  return app.admin.blueprints.form({
    router: router,
    object: binding,
    form: f => [
      f.field({
        key: 'type',
        as: 'radios',
        value: 'connect',
        selections: {
          'embed': 'Embed',
          'connect': 'Connect',
        }
      }),
    ],
    update: (form) => {
      if (form.type) {
        binding.type = form.type
      } else {
        delete binding.type
      }
      return blueprint;
    },
  })

}
