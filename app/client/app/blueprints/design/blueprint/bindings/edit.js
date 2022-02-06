app.blueprints.design.blueprint.bindings.edit = (route, blueprint) => (a,x) => {

  let binding = blueprint.bindings[route.params.bindingIndex]
  let valueHintFor = (targetBlueprint, keyName) => [
    'target default value: ',
    (targetBlueprint.binding_target || {})[keyName] || a['.error']('no match')
  ]

  return [
    app.fetch({
      url: `/api/blueprints/@${binding.target_identifier}`,
      placeholder: app.spinner('Loading target blueprint'),
      success: (targetBlueprint, el) => [
        'Binding ',
        Number(route.params.bindingIndex) + 1,
        ' - ',
        binding.target_identifier,
        app.blueprints.design.blueprint.form({
          horizontal: true,
          route: route,
          object: binding,
          form: f => [
            f.field({
              key: 'custom_identifier',
              label: 'Identifier',
              as: 'radios',
              value: (
                f.object.identifier &&
                (f.object.identifier != f.object.target_identifier)
              ) ? 'custom' : 'default',
              selections: {
                default: `Default - ${f.object.target_identifier}`,
                custom: 'Custom',
              }
            }),
            f.field({
              key: 'identifier',
              label: false,
              required: true,
              dependent: {
                key: 'custom_identifier',
                value: 'custom',
              },
              placeholder: 'Binding identifier',
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
            f.field({
              key: 'configuration',
              as: 'many',
              horizontal: false,
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
                  datalist: Object.keys(targetBlueprint.binding_target || {}),
                  control: {
                    autocomplete: 'off',
                    controlTag: {
                      $on: {
                        'input': (el) => (e) => {
                          let defaultValueOutput = el.$('^ax-appkit-form-nest-item input[name$="[value]"] ^ax-appkit-form-field ax-appkit-form-field-hint small')
                          let keyName = el.$('input').value
                          defaultValueOutput.$nodes = valueHintFor(targetBlueprint, keyName)
                        }
                      }
                    },
                  },
                }),
                ff.field({
                  key: 'value',
                  hint: valueHintFor(targetBlueprint, ff.object.key)
                }),

              ]
            }),
          ],
          digest: (form) => {
            delete form.custom_identifier
            let configuration = {}
            for (let parameter of form.configuration) {
              configuration[parameter.key] = parameter.value
            }
            form.configuration = configuration
            blueprint.bindings[route.params.bindingIndex] = app.compact(form);
            return {model: blueprint};
          },
        })
      ],
    }),
  ];
}
