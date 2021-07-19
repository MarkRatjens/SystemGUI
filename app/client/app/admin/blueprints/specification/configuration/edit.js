app.admin.blueprints.specification.configuration.edit = (route, specification) =>
app.admin.blueprints.specification.form({
  route: route,
  object: specification,
  form: (f) => [
    f.field({
      key: 'configuration',
      as: 'table',
      addable: true,
      moveable: true,
      removeable: true,
      collection: true,
      singular: 'parameter',
      value: (v) => Object.keys(v || {}).map((key) => ({
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
      specification.configuration = configuration
    } else {
      delete specification.configuration
    }
    return specification;
  },
})
