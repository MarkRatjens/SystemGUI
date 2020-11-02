app.blueprints.description.edit = (router, blueprint) =>
app.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'description',
      as: 'markdown',
    }),
  ],
  update: (form) => {
    if (form.description.length) {
      blueprint.description = form.description
    } else {
      delete blueprint.description
    };
    return blueprint;
  },
})
