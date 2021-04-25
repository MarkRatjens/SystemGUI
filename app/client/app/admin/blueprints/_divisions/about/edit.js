app.admin.blueprints.about.edit = (router, blueprint) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'about',
      as: 'one',
      form: ff => [
        ff.field({
          key: 'title',
        }),
        ff.field({
          key: 'explanation',
          as: 'textarea',
          resize: true,
        }),
      ],
    }),
  ],
  update: (form) => {
    let about = app.compact(form.about)
    if (Object.keys(about).length) {
      blueprint.about = about
    } else {
      delete blueprint.about
    };
    return blueprint;
  },
})
