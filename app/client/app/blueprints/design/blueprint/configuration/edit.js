app.blueprints.design.blueprint.configuration.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: (f) => [
    f.field({
      key: 'configuration',
      as: 'table',
      addable: true,
      moveable: true,
      removeable: true,
      collection: true,
      singular: 'parameter',
      ingest: (v) => Object.keys(v || {}).map((key) => ({
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
  digest: (form) => {
    let configuration = {}
    for (let parameter of form.configuration) {
      configuration[parameter.key] = parameter.value
    }
    if (Object.keys(configuration).length) {
      blueprint.configuration = configuration
    } else {
      delete blueprint.configuration
    }
    return {model: blueprint};
  },
})
