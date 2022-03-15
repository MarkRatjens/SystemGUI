app.blueprints.design.blueprint.bindingTarget.edit = (route, blueprint) => 
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: f => [
    'Binding target',
    f.field({
      key: 'binding_target',
      label: false,
      as: 'one',
      form: (ff) => [
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
        ff.field({
          key: 'service',
          as: 'table',
          singular: 'service parameter',
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
    let bindingTarget = app.compact(form.binding_target)
    if (Object.keys(bindingTarget).length) {
      blueprint.binding_target = bindingTarget
    } else {
      delete blueprint.binding_target
    }
    return {model: blueprint};
  },
})
