app.formDSL.designer.template = f => f.fieldset( {
  // vertical: true,
  label: false,
  body: [
    app.collapse( {
      label: 'Template',
      body: [
        f.field( {
          key: 'template',
          as: 'markdown',
          label: false,
          // vertical: true,
        } ),
      ]
    } ),
  ],
  dependent: {
    key: 'type',
    pattern: '^template$',
  },
} ),
