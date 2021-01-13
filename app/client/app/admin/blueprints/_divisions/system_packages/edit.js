app.admin.blueprints.system_packages.edit = (router, blueprint) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'system_packages',
      label: 'System packages',
      as: 'one',
      form: (ff) => [
        ff.field({
          key: 'adds',
          // required: true,
          // label: false,
          as: 'textarea',
          resize: true,
          placeholder: 'List system packages line by line',
          value: (v) => (v || []).join("\n"),
        }),
        ff.field({
          key: 'removes',
          // required: true,
          // label: false,
          as: 'textarea',
          resize: true,
          placeholder: 'List system packages line by line',
          value: (v) => (v || []).join("\n"),
        }),
      ]
    }),
  ],
  update: (form) => {
    let adds = app.listify(form.system_packages.adds)
    let removes = app.listify(form.system_packages.removes)
    if (adds.length || removes.length) {
      blueprint.system_packages = blueprint.system_packages || {}
      if (adds.length) {
        blueprint.system_packages.adds = adds
      } else {
        delete blueprint.system_packages.adds
      }
      if (removes.length) {
        blueprint.system_packages.removes = removes
      } else {
        delete blueprint.system_packages.removes
      }
    } else {
      delete blueprint.system_packages
    }
    return blueprint;
  },
})
