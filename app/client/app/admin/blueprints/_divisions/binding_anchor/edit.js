app.admin.blueprints.binding_anchor.edit = (router, blueprint) => (a,x) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'binding_anchor',
      label: false,
      as: 'table',
      singular: 'parameter',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      control: {
        value: Object.keys(f.object.binding_anchor || {}).map((key) => ({
          key: key,
          value: f.object.binding_anchor[key],
        })),
      },
      form: (ff) => [
        ff.field({
          key: 'key',
          // control: {name: ff.key},
          label: false,
          required: true,
          placeholder: 'Key',
        }),
        ff.field({
          key: 'value',
          // control: {name: ff.value},
          label: false,
          placeholder: 'Value',
        }),
      ]

      // form: (ff) => [
      //   ff.field({
      //     key: 'variables',
      //     label: 'Anchor variables',
      //     as: 'table',
      //     control: {
      //       value: Object.keys((ff.object || {}).variables || []).map((key) => ({
      //         key: key,
      //         value: ff.object.variables[key],
      //       })),
      //     },
      //     singular: 'variable',
      //     addable: true,
      //     removeable: true,
      //     moveable: true,
      //     collection: true,
      //     form: (fff) => [
      //       fff.field({
      //         key: 'key',
      //         control: {name: ''},
      //         label: false,
      //         required: true,
      //         placeholder: 'Key',
      //       }),
      //       fff.field({
      //         key: 'value',
      //         control: {name: ''},
      //         label: false,
      //         placeholder: 'Value',
      //       }),
      //       fff.field({
      //         as: 'hidden',
      //         control: {name: ''},
      //       }),
      //     ]
      //   })
      // ],
    }),
  ],
  update: (form) => {
    if (form.binding_anchor.length) {
      let binding_anchor = {}
      for (let parameter of form.binding_anchor) {
        binding_anchor[parameter.key] = parameter.value
      }
      blueprint.binding_anchor = binding_anchor
    } else {
      delete blueprint.binding_anchor
    };
    return blueprint;
  },

})
