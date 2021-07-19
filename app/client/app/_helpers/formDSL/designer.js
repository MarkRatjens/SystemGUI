app.formDSL.designer = blueprint => f => (a,x) => [

  f.field( {
    key: 'components',
    label: false,
    as: 'many',
    collection: true,
    singular: 'dialogue component',
    form: app.formDSL.designer.component( blueprint ),
    // vertical: true,
    addable: true,
    removeable: true,
    moveable: true,
  } ),

]
