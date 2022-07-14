app.blueprints.design.blueprint.resources.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: f => [
    'Resources',
    f.field({
      key: 'resources',
      label: false,
      as: 'one',
      form: (ff) => [
        ff.field({
          key: 'type',
        }),
        ff.field({
          key: 'identifier',
        }),
        ff.field({
          key: 'configuration',
          as: 'table',
          singular: 'configuration parameter',
          addable: true,
          removeable: true,
          moveable: true,
          collection: true,
          ingest: (value) => Object.keys(value || {}).map((key) => ({
            key: key,
            value: (value)[key],
          })),
          digest: (value) => {
            result = {}
            for (let parameter of value) {
              result[parameter.key] = parameter.value
            }
            return result
          },
          form: (fff) => [
            fff.field({
              key: 'key',
              label: false,
              required: true,
              placeholder: 'Key',
            }),
            fff.field({
              key: 'value',
              label: false,
              placeholder: 'Value',
            }),
          ]
        }),
      ]
    }),
  ],
  digest: (form) => {
    let resources = app.compact(form.resources)
    if (Object.keys(resources).length) {
      blueprint.resources = resources
    } else {
      delete blueprint.resources
    }
    return {model: blueprint};
  },
})
