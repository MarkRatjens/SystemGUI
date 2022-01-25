app.blueprints.design.blueprint.volumes.edit = (route, blueprint) => (a,x) =>
app.blueprints.design.blueprint.form({
  route: route,
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
          key: 'type',
          required: true,
        }),
        ff.field({
          key: 'destination',
          required: true,
        }),
        ff.field({
          key: 'name',
          required: true,
        }),
      ]
    }),
  ],
  digest: (form) => {
    if (form.volumes.length) {
      blueprint.volumes = form.volumes
    } else {
      delete blueprint.volumes
    };
    return {model: blueprint};
  },
})
