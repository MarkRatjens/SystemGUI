app.blueprints.design.blueprint.input.edit = (route, blueprint) => (a,x) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: f => [
    'Input',
    f.field({
      key: 'input',
      label: false,
      as: 'table',
      singular: 'parameter',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      control: {
        value: Object.keys(f.object.input || {}).map((key) => ({
          key: key,
          value: f.object.input[key],
        })),
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
  ],
  digest: (form) => {
    if (form.input.length) {
      let input = {}
      for (let parameter of form.input) {
        input[parameter.key] = parameter.value
      }
      blueprint.input = input
    } else {
      delete blueprint.input
    };
    return {model: blueprint};
  },
})
