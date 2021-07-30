app.blueprints.design.blueprint.permissions.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: (f) => [
    f.field({
      key: 'permissions',
      as: 'table',
      singular: 'rule',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      form: (ff) => [
        ff.field({
          key: 'file',
        }),
        ff.field({
          key: 'mode',
        }),
        ff.field({
          key: 'ownership',
        }),
      ]
    }),
  ],
  digest: (form) => {
    let permissions = app.compact(form.permissions)
    if (Object.keys(permissions).length) {
      blueprint.permissions = permissions
    } else {
      delete blueprint.permissions
    }
    return {blueprint: blueprint};
  },
})
