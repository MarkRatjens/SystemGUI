app.admin.blueprints.specification.repositories.edit = (route, specification) => app.admin.blueprints.specification.form({
  route: route,
  object: specification,
  form: f => [
    f.field({
      key: 'repositories',
      as: 'table',
      singular: 'repository',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      form: f => [
        
      ],
    }),
  ],
  update: (form) => {
    if (form.repositories.length) {
      specification.repositories = form.repositories
    } else {
      delete specification.repositories
    };
    return specification;
  },
})
