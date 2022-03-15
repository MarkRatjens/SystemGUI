app.formDSL.designer.form.field.dependent = (f) => a['app-form-field-control']([
  f.field( {
    key: 'dependent',
    label: false,
    as: 'table',
    collection: true,
    singular: 'dependency',
    addable: true,
    removeable: true,
    moveable: true,
    form: (ff) => [
      ff.field( {
        key: 'target',
        required: true,
      } ),
      ff.field( {
        key: 'pattern',
      } ),
    ],
    dependent: {
      key: 'control',
      pattern: '^(?!hidden).*$',
    }
  } ),

  f.fieldset({
    body: app.placeholder('Nothing to configure'),
    dependent: {
      key: 'control',
      pattern: '^hidden$',
    },
  }),
])
