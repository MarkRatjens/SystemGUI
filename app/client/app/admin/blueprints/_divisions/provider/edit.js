app.admin.blueprints.provider.edit = (router, blueprint) =>
app.admin.blueprints.form({
  router: router,
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
  update: (form) => {
    let provider = app.compact(form.provider)
    if (Object.keys(provider).length) {
      blueprint.provider = provider
    } else {
      delete blueprint.provider
    }
    return blueprint;
  },
})
