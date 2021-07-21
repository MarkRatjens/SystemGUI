app.admin.blueprints.specification.bindings.edit = (route, specification) => (a,x) => {

  let binding = specification.bindings[route.params.bindingIndex]

  return [
    app.fetch({
      url: `/api/blueprints/${binding.target_identifier}/specification`,
      placeholder: app.spinner('Loading target blueprint'),
      success: (targetSpecification, el) => [
        'Binding to ',
        binding.target_identifier,
        app.admin.blueprints.specification.form({
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
              as: 'radios',
              value: 'connect',
              selections: {
                'embed': 'Embed',
                'connect': 'Connect',
              }
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
            specification.bindings[route.params.bindingIndex] = app.compact(form);
            return specification;
          },
        })
      ],
    }),
  ];
}
