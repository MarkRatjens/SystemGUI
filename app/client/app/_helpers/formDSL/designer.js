app.formDSL.designer = blueprint => f => a.div([

  f.field( {
    key: 'components',
    label: false,
    as: 'many',
    collection: true,
    singular: 'dialogue component',
    form: app.formDSL.designer.component( blueprint ),
    addable: true,
    removeable: true,
    moveable: true,
  } ),

])
