app.formDSL.designer.form.components = f => [

  f.field( {
    key: 'components',
    as: 'many',
    label: false,
    singular: 'form component',
    collection: true,
    form: app.formDSL.designer.form.component,
    // vertical: true,
    removeable: true,
    addable: true,
    moveable: true,
  } ),

]
