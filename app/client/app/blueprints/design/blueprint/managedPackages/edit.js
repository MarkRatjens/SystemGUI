app.blueprints.design.blueprint.managedPackages.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: f => [
    f.field({
      key: 'managed_packages',
      as: 'many',
      singular: 'module type',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      control: {
        value: Object.keys(f.object.managed_packages || {}).map((type) =>({
          type: type,
          names: f.object.managed_packages[type].join("\n"),
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
          placeholder: 'List packages line by line'
        }),
      ]
    }),
  ],
  digest: (form) => {
    if (form.managed_packages.length) {
      let managed_packages = {}
      for (let packages of form.managed_packages) {
        managed_packages[packages.type] = packages.names.split("\n")
      }
      blueprint.managed_packages = managed_packages
    } else {
      delete blueprint.managed_packages
    };
    return {model: blueprint};
  },
})
