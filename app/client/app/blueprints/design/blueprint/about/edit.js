app.blueprints.design.blueprint.about.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
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
        }),
      ],
    }),
  ],
  digest: (form) => {
    let about = app.compact(form.about)
    if (Object.keys(about).length) {
      blueprint.about = about
    } else {
      delete blueprint.about
    };
    return {blueprint: blueprint};
  },
})
