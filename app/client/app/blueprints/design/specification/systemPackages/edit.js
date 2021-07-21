app.blueprints.design.specification.systemPackages.edit = (route, specification) =>
app.blueprints.design.specification.form({
  route: route,
  object: specification,
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
          ingest: (v) => (v || []).join("\n"),
        }),
        ff.field({
          key: 'removes',
          // required: true,
          // label: false,
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
      specification.system_packages = specification.system_packages || {}
      if (adds.length) {
        specification.system_packages.adds = adds
      } else {
        delete specification.system_packages.adds
      }
      if (removes.length) {
        specification.system_packages.removes = removes
      } else {
        delete specification.system_packages.removes
      }
    } else {
      delete specification.system_packages
    }
    return {specification: specification};
  },
})
