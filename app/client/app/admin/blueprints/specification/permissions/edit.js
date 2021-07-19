app.admin.blueprints.specification.permissions.edit = (route, specification) =>
app.admin.blueprints.specification.form({
  route: route,
  object: specification,
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
  update: (form) => {
    let permissions = app.compact(form.permissions)
    if (Object.keys(permissions).length) {
      specification.permissions = permissions
    } else {
      delete specification.permissions
    }
    return specification;
  },
})
