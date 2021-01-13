app.dashboard.blueprints.bindings.configuration.edit = (router, resolution, binding, targetBlueprint) => [
  app.admin.resolutions.form({
    router: router,
    object: binding,
    form: (f) => f.field({
      key: 'configuration',
      as: 'one',
      label: false,
      form: (ff) => Object.keys(binding.configuration || {}).map(
        (parameter) => ff.field({
          key: parameter,
          label: parameter,
          horizontal: true,
        })
      )
    }),
    update: (form) => {
      binding.configuration = form.configuration
      return resolution;
    },
    close: '../..',
  }),
]
