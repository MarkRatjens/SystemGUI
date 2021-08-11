app.blueprints.design.blueprint.executions.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: f => [
    f.field({
      key: 'executions',
      as: 'many',
      singular: 'execution',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      form: (ff) => [
        ff.field({
          key: 'type',
          required: true,
          as: 'select',
          placeholder: 'Select type',
          label: false,
          selections: [
            'docker',
          ]
        }),
        ff.field({
          key: 'CMD',
          required: true,
        }),
      ]
    }),
  ],
  digest: (form) => {
    if (form.executions.length) {
      blueprint.executions = form.executions
    } else {
      delete blueprint.executions
    }
    return {model: blueprint};
  },
})
