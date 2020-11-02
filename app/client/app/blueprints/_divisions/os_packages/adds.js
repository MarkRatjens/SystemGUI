app.blueprints.os_packages.adds = (router, blueprint) =>
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
          key: 'adds',
          label: 'OS packages to add',
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
    if (form.os_packages.adds.length) {
      blueprint.os_packages = blueprint.os_packages || {}
      blueprint.os_packages.adds = form.os_packages.adds
    } else {
      if (!blueprint.os_packages.removes) {
        delete blueprint.os_packages
      } else {
        delete blueprint.os_packages.adds
      }
    };
    return blueprint;
  },
})
