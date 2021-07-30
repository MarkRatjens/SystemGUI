app.blueprints.design.blueprint.provider.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: (f) => [
    f.field({
      key: 'provider',
      as: 'one',
      form: (ff) => [
        ff.field({
          key: 'type',
        }),
      ]
    }),
  ],
  digest: (form) => {
    let provider = app.compact(form.provider)
    if (Object.keys(provider).length) {
      blueprint.provider = provider
    } else {
      delete blueprint.provider
    }
    return {blueprint: blueprint};
  },
})
