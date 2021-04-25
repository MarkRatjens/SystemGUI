app.admin.blueprints.modules.edit = (router, blueprint) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'modules',
      as: 'many',
      singular: 'module type',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      control: {
        value: Object.keys(f.object.modules).map((type) =>({
          type: type,
          names: f.object.modules[type].join("\n"),
        }))
      },
      form: (ff) => [
        ff.field({
          key: 'type',
          required: true,
          as: 'select',
          placeholder: 'Select type',
          label: false,
          selections: [
            'apache',
            'lua',
            'npm',
            'pear',
            'pecl',
            'php',
            'python',
            'r',
          ]
        }),
        ff.field({
          key: 'names',
          required: true,
          label: false,
          as: 'textarea',
          resize: true,
          placeholder: 'List modules line by line'
        }),
      ]
    }),
  ],
  update: (form) => {
    if (form.modules.length) {
      let modules = {}
      for (let modules_group of form.modules) {
        modules[modules_group.type] = modules_group.names.split("\n")
      }
      blueprint.modules = modules
    } else {
      delete blueprint.modules
    };
    return blueprint;
  },
})
