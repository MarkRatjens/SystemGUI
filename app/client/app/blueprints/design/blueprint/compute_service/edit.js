app.blueprints.design.blueprint.compute_service.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: (f) => [
    f.field({
      key: 'compute_service',
      as: 'one',
      form: (ff) => [
        ff.field({
          key: 'identifier',
        }),
      ]
    }),
  ],
  digest: (form) => {
    let compute_service = app.compact(form.compute_service)
    if (Object.keys(compute_service).length) {
      blueprint.compute_service = compute_service
    } else {
      delete blueprint.compute_service
    }
    return {model: blueprint};
  },
})
