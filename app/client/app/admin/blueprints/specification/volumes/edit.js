app.admin.blueprints.specification.volumes.edit = (route, specification) => (a,x) =>
app.admin.blueprints.specification.form({
  route: route,
  object: specification,
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
      specification.volumes = form.volumes
    } else {
      delete specification.volumes
    };
    return specification;
  },
})
