app.formDSL.designer.form.field.help = (f) => [
  f.field( {
    key: 'help',
    label: false,
    as: 'markdown',
    dependent: {
      key: 'control',
      pattern: '^(?!hidden).+$',
    },
  } ),

  f.fieldset({
    body: [
      app.placeholder('Nothing to configure'),
    ],
    dependent: {
      key: 'control',
      pattern: '^(hidden|)$',
    },
  }),
]
