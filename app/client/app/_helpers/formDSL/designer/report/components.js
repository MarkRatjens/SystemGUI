app.formDSL.designer.report.components = blueprint => f => [

  f.field( {
    key: 'components',
    as: 'many',
    collection: true,
    label: false,
    singular: 'form component',
    form: app.formDSL.designer.report.component( blueprint ),
  } ),

]
