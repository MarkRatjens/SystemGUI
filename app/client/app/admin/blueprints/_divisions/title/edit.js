app.admin.blueprints.title.edit = (router, blueprint) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'title',
    }),
  ],
  update: (form) => {
    if (form.title.length) {
      blueprint.title = form.title
    } else {
      delete blueprint.title
    };
    return blueprint;
  },
})
