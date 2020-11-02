app.blueprints.bindings.new = (router, blueprint) =>
app.blueprints.form({
  router: router,
  form: (f) => [
    f.field({
      key: 'descriptor',
      as: 'one',
      label: false,
      form: (ff) => [
        ff.field({
          key: 'repository',
          type: 'url',
          required: true,
        }),
        ff.field({
          key: 'branch',
        }),
        ff.field({
          key: 'identifier',
        }),
      ],
    }),
  ],
  update: (form) => {
    if (ax.is.array(blueprint.bindings)) {
      blueprint.bindings.push(form)
    } else {
      blueprint.bindings = [form]
    };
    return blueprint;
  },
})
