app.formDSL.designer.template = f => f.fieldset( {
  label: false,
  body: [
    app.collapse( {
      label: 'Template',
      body: [
        f.field( {
          key: 'template',
          as: 'markdown',
          label: false,
        } ),
      ]
    } ),
  ],
  dependent: {
    key: 'type',
    pattern: '^template$',
  },
} ),
