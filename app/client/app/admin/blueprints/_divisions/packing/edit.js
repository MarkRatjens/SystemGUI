app.admin.blueprints.packing.edit = (router, blueprint) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: (f) => [
    f.field({
      key: 'packing',
      as: 'one',
      form: (ff) => [
        ff.field({
          key: 'early',
          as: 'textarea',
          value: (v) => (v || []).join("\n")
        }),
        ff.field({
          key: 'late',
          as: 'textarea',
          value: (v) => (v || []).join("\n")
        }),
      ]
    }),
  ],
  update: (form) => {
    let packing = form.packing
    for (let key of Object.keys(packing)) {
      packing[key] = app.listify(packing[key])
    }
    packing = app.compact(packing)
    if (Object.keys(packing).length) {
      blueprint.packing = packing
    } else {
      delete blueprint.packing
    }
    return blueprint;
  },
})
