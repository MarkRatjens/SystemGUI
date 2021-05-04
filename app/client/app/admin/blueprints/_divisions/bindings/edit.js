app.admin.blueprints.bindings.edit = (router, blueprint) => (a,x) => {

  let binding = blueprint.bindings[router.params.bindingIndex]

  return [
    'Binding to ',
    binding.target_identifier,
    app.admin.blueprints.form({
      horizontal: true,
      router: router,
      object: binding,
      form: f => [
        f.field({
          key: 'identifier',
        }),
        f.field({
          key: 'target_identifier',
          as: 'hidden',
        }),
        f.field({
          key: 'type',
          as: 'radios',
          value: 'connect',
          selections: {
            'embed': 'Embed',
            'connect': 'Connect',
          }
        }),
        f.field({
          key: 'configuration',
          as: 'table',
          addable: true,
          moveable: true,
          removeable: true,
          collection: true,
          singular: 'parameter',
          value: (v) => Object.keys(v || {}).map((key) => ({
            key: key,
            value: v[key],
          })),
          form: (ff) => [
            ff.field({
              key: 'key',
            }),
            ff.field({
              key: 'value',
            }),
          ]
        }),
      ],
      update: (form) => {
        let configuration = {}
        for (let parameter of form.configuration) {
          configuration[parameter.key] = parameter.value
        }
        form.configuration = configuration
        blueprint.bindings[router.params.bindingIndex] = app.compact(form);
        return blueprint;
      },
    })
  ];

}
