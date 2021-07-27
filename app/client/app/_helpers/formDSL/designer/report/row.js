app.formDSL.designer.report.row = blueprint => f => f.field( {
  key: 'row',
  as: 'one',
  label: false,
  dependent: {
    key: 'type',
    pattern: '^row$',
  },
  form: ff => [

    app.collapse( {
      label: 'Columns',
      body: ff.field({
        key: 'columns',
        as: 'many',
        collection: true,
        singular: 'column',
        form: app.formDSL.designer.report.components( blueprint )
      }),
    } ),

  ]
} )
