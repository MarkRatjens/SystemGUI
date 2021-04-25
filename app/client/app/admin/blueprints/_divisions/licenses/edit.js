app.admin.blueprints.licenses.edit = (router, blueprint) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'licenses',
      as: 'table',
      singular: 'license',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      form: (f) => [
        f.field({
          key: 'label',
          label: false,
          required: true,
          placeholder: 'Label',
        }),
        f.field({
          key: 'url',
          label: false,
          required: true,
          type: 'url',
          placeholder: 'URL',
        }),
      ]
    }),
  ],
  update: (form) => {
    if (form.licenses.length) {
      blueprint.licenses = form.licenses
    } else {
      delete blueprint.licenses
    };
    return blueprint;
  },
})
