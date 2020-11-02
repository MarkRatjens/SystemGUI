app.blueprints.os_packages.removes = (router, blueprint) =>
app.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'os_packages',
      label: false,
      as: 'one',
      form: (f) => [
        f.field({
          key: 'removes',
          label: 'OS packages to remove',
          required: true,
          singular: 'OS package',
          addable: true,
          removeable: true,
          moveable: true,
          collection: true,
        }),
      ]
    }),
  ],
  update: (form) => {
    if (form.os_packages.removes.length) {
      blueprint.os_packages = blueprint.os_packages || {}
      blueprint.os_packages.removes = form.os_packages.removes
    } else {
      if (!blueprint.os_packages.adds) {
        delete blueprint.os_packages
      } else {
        delete blueprint.os_packages.removes
      }
    };
    return blueprint;
  },
})
