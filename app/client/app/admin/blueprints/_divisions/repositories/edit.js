app.admin.blueprints.repositories.edit = (router, blueprint) => app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'repositories',
      as: 'table',
      singular: 'repository',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      form: app.descriptor.form,
    }),
  ],
  update: (form) => {
    if (form.repositories.length) {
      blueprint.repositories = form.repositories
    } else {
      delete blueprint.repositories
    };
    return blueprint;
  },
})
