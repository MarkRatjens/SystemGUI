app.blueprints.design.blueprint.systemPackages.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: f => [
    f.field({
      key: 'system_packages',
      label: 'System packages',
      as: 'one',
      form: (ff) => [
        ff.field({
          key: 'adds',
          as: 'textarea',
          resize: true,
          placeholder: 'List system packages line by line',
          ingest: (v) => (v || []).join("\n"),
        }),
        ff.field({
          key: 'removes',
          as: 'textarea',
          resize: true,
          placeholder: 'List system packages line by line',
          ingest: (v) => (v || []).join("\n"),
        }),
      ]
    }),
  ],
  digest: (form) => {
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
    return {blueprint: blueprint};
  },
})
