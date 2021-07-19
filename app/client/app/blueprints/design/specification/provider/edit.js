app.blueprints.design.specification.provider.edit = (route, specification) =>
app.blueprints.design.specification.form({
  route: route,
  object: specification,
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
      specification.provider = provider
    } else {
      delete specification.provider
    }
    return {specification: specification};
  },
})
