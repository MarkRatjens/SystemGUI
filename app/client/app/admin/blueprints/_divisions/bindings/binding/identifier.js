app.admin.blueprints.bindings.binding.identifier = (router, blueprint) => {

  let binding = blueprint.bindings[router.params.binding_id]

  return app.admin.blueprints.form({
    router: router,
    object: binding,
    form: f => [
      f.field({
        key: 'identifier',
      }),
    ],
    update: (form) => {
      if (form.identifier) {
        binding.identifier = form.identifier
      } else {
        delete binding.identifier
      }
      return blueprint;
    },
  })

}
