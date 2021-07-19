app.blueprints.design.specification.bindings.edit = (route, specification) => (a,x) => {

  let binding = specification.bindings[route.params.bindingIndex]

  return [
    app.fetch({
      url: `/api/blueprints/@${binding.target_identifier}/specification`,
      placeholder: app.spinner('Loading target blueprint'),
      success: (targetSpecification, el) => [
        'Binding to ',
        binding.target_identifier,
        app.blueprints.design.specification.form({
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
            targetSpecification,
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
            form.identifier = form.identifier || form.target_identifier
            specification.bindings[route.params.bindingIndex] = app.compact(form);
            return {specification: specification};
          },
        })
      ],
    }),
  ];
}
