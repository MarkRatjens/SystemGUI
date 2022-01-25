app.blueprints.design.blueprint.serviceTasks.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: f => [
    f.field({
      key: 'service_tasks',
      as: 'one',
      form: (ff) => [
        ff.field({
          key: 'connect',
          required: true,
          collection: true,
          singular: 'connect task',
          addable: true,
          removeable: true,
          moveable: true,
        }),
        ff.field({
          key: 'connected',
          required: true,
          collection: true,
          singular: 'connected task',
          addable: true,
          removeable: true,
          moveable: true,
        }),
        ff.field({
          key: 'disconnect',
          required: true,
          collection: true,
          singular: 'disconnect task',
          addable: true,
          removeable: true,
          moveable: true,
        }),
        ff.field({
          key: 'disconnected',
          required: true,
          collection: true,
          singular: 'disconnected task',
          addable: true,
          removeable: true,
          moveable: true,
        }),
      ]
    }),
  ],
  digest: (form) => {
    form = app.compact(form)
    if (Object.keys(form).length) {
      blueprint.service_tasks = form.service_tasks
    } else {
      delete blueprint.service_tasks
    }
    return {model: blueprint};
  },
})
