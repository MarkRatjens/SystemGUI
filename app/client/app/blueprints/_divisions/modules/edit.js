app.blueprints.modules.edit = (router, blueprint) =>
app.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'modules',
      as: 'table',
      singular: 'module',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      form: (f) => [
        f.field({
          key: 'type',
          required: true,
          as: 'select',
          placeholder: ' ',
          label: false,
          selections: [
            'apache',
            'lua',
            'npm',
            'pear',
            'pecl',
            'php',
            'python',
            'r',
          ]
        }),
        f.field({
          key: 'name',
          required: true,
          label: false,
        }),
      ]
    }),
  ],
  update: (form) => {
    if (form.modules.length) {
      blueprint.modules = form.modules
    } else {
      delete blueprint.modules
    };
    return blueprint;
  },
})
