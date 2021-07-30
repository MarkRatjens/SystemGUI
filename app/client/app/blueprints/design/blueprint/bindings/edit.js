app.blueprints.design.blueprint.bindings.edit = (route, blueprint) => (a,x) => {

  let binding = blueprint.bindings[route.params.bindingIndex]

  return [
    app.fetch({
      url: `/api/blueprints/@${binding.target_identifier}/blueprint`,
      placeholder: app.spinner('Loading target blueprint'),
      success: (targetblueprint, el) => [
        'Binding to ',
        binding.target_identifier,
        app.blueprints.design.blueprint.form({
          horizontal: true,
          route: route,
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
              label: 'Embed',
              as: 'checkbox',
              checked: 'embed',
            }),
            targetblueprint,
            f.field({
              key: 'configuration',
              as: 'table',
              addable: true,
              moveable: true,
              removeable: true,
              collection: true,
              singular: 'parameter',
              ingest: (v) => Object.keys(v || {}).map((key) => ({
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
          digest: (form) => {
            let configuration = {}
            for (let parameter of form.configuration) {
              configuration[parameter.key] = parameter.value
            }
            form.configuration = configuration
            form.identifier = form.identifier || form.target_identifier
            blueprint.bindings[route.params.bindingIndex] = app.compact(form);
            return {blueprint: blueprint};
          },
        })
      ],
    }),
  ];
}
