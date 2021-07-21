app.admin.blueprints.specification.about.edit = (route, specification) =>
app.admin.blueprints.specification.form({
  route: route,
  object: specification,
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
      specification.about = about
    } else {
      delete specification.about
    };
    return specification;
  },
})
