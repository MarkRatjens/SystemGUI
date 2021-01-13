app.admin.blueprints.configuration.edit = (router, blueprint) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: (f) => [
    f.field({
      key: 'configuration',
      as: 'table',
      addable: true,
      collection: true,
      value: (v) => Object.keys(v).map((key) => ({
        key: key,
        value: v[key],
      })),
      form: (ff) => [
        ff.field({
          key: 'key',
        }),
        ff.field({
          key: 'value',
        }),
      ]
    }),
  ],
  update: (form) => {
    let configuration = {}
    for (let parameter of form.configuration) {
      configuration[parameter.key] = parameter.value
    }
    if (Object.keys(configuration).length) {
      blueprint.configuration = configuration
    } else {
      delete blueprint.configuration
    }
    return blueprint;
  },
})
