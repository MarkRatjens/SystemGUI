app.blueprints.bindings.binding.descriptor = (router, blueprint) => {

  let binding = blueprint.bindings[router.params.binding_id]

  return app.blueprints.form({
    router: router,
    object: binding,
    form: f => [
      f.field({
        key: 'descriptor',
        as: 'one',
        form: (ff) => [
          ff.field({
            key: 'repository',
            type: 'url',
          }),
          ff.field({
            key: 'branch',
          }),
          ff.field({
            key: 'identifier',
          }),
        ],
      }),
    ],
    update: (form) => {
      form = ax.x.lib.compact(form)
      if (form.descriptor) {
        binding.descriptor = form.descriptor
      } else {
        delete binding.descriptor
      }
      return blueprint;
    },
  })

}
