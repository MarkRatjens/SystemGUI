app.blueprints.design.blueprint.ports.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: f => [
    f.field({
      key: 'ports',
      as: 'table',
      singular: 'port',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      form: (ff) => [
        ff.field({
          key: 'start_port',
          required: true,
        }),
        ff.field({
          key: 'end_port',
        }),
        ff.field({
          key: 'external_port',
        }),
        ff.field({
          key: 'protocol',
        }),
      ]
    }),
  ],
  digest: (form) => {
    form = app.compact(form)
    if (form.ports.length) {
      blueprint.ports = form.ports
    } else {
      delete blueprint.ports
    }
    return {model: blueprint};
  },
})
