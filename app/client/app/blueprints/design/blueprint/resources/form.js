app.blueprints.design.blueprint.resources.form =
(f) => [
  f.field({
    key: 'type',
    required: true,
  }),
  f.field({
    key: 'identifier',
  }),
  f.field({
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
      let result = {}
      for (let parameter of value) {
        result[parameter.key] = parameter.value
      }
      return result
    },
    form: (ff) => [
      ff.field({
        key: 'key',
        label: false,
        required: true,
        placeholder: 'Key',
      }),
      ff.field({
        key: 'value',
        label: false,
        placeholder: 'Value',
      }),
    ]
  }),
]
