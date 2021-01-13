app.admin.blueprints.bindings.new = (router, blueprint) => (a,x) =>
app.admin.blueprints.form({
  router: router,
  form: (f) => [
    f.field({
      key: 'identifier',
    }),
    f.field({
      key: 'descriptor',
      as: 'one',
      label: 'Blueprint descriptor / Target service',
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
    f.field({
      key: 'type',
      as: 'checkbox',
      control: {
        label: 'Embed',
      },
      checked: 'embed',
      // value: '',
      // selections: {
      //   'embed': 'Embed',
      //   'connect': 'Connect',
      // }
    }),
  ],
  update: (form) => {
    form = app.compact(form)
    if (ax.is.array(blueprint.bindings)) {
      blueprint.bindings.push(form)
    } else {
      blueprint.bindings = [form]
    };
    return blueprint;
  },
})
