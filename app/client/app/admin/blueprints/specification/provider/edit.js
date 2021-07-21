app.admin.blueprints.specification.provider.edit = (route, specification) =>
app.admin.blueprints.specification.form({
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
  digest: (form) => {
    let provider = app.compact(form.provider)
    if (Object.keys(provider).length) {
      specification.provider = provider
    } else {
      delete specification.provider
    }
    return specification;
  },
})
