app.formDSL.designer.report.template = f => f.field( {
  key: 'template',
  as: 'markdown',
  label: false,
  dependent: {
    key: 'type',
    pattern: '^template$',
  },
} )
