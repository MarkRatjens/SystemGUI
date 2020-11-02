app.blueprints.binding_anchor.edit = (router, blueprint) => (a,x) =>
app.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'binding_anchor',
      label: false,
      as: 'one',
      form: (ff) => [
        ff.field({
          key: 'variables',
          label: 'Anchor variables',
          as: 'table',
          control: {
            value: Object.keys((ff.object || {}).variables || []).map((key) => ({
              key: key,
              value: ff.object.variables[key],
            })),
          },
          singular: 'variable',
          addable: true,
          removeable: true,
          moveable: true,
          collection: true,
          form: (fff) => [
            fff.field({
              key: 'key',
              control: {name: ''},
              label: false,
              required: true,
              placeholder: 'Key',
            }),
            fff.field({
              key: 'value',
              control: {name: ''},
              label: false,
              placeholder: 'Value',
            }),
            fff.field({
              as: 'hidden',
              control: {name: ''},
            }),
          ]
        })
      ],
    }),
  ],
  update: (form) => {
    if (form.binding_anchor.variables.length) {
      let variables = {}
      for (let variable of form.binding_anchor.variables) {
        variables[variable.key] = variable.value
      }
      form.binding_anchor.variables = variables
      blueprint.binding_anchor = form.binding_anchor
    } else {
      delete blueprint.binding_anchor
    };
    return blueprint;
  },

})
