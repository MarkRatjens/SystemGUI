app.admin.blueprints.volumes.edit = (router, blueprint) => (a,x) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'volumes',
      label: false,
      as: 'table',
      singular: 'volume',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      form: (ff) => [
        ff.field({
          key: 'destination',
          required: true,
        }),
        ff.field({
          key: 'source',
          required: true,
        }),
      ]
    }),
  ],
  update: (form) => {
    if (form.volumes.length) {
      blueprint.volumes = form.volumes
    } else {
      delete blueprint.volumes
    };
    return blueprint;
  },
})
