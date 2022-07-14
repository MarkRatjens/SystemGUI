app.blueprints.design.blueprint.dimensions.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: (f) => [
    f.field({
      key: 'dimensions',
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
    let dimensions = {}
    for (let parameter of form.dimensions) {
      dimensions[parameter.key] = parameter.value
    }
    if (Object.keys(dimensions).length) {
      blueprint.dimensions = dimensions
    } else {
      delete blueprint.dimensions
    }
    return {model: blueprint};
  },
})
