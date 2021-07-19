app.formDSL.designer.navigation.component = blueprint => f => [

  f.field( {
    key: 'type',
    as: 'select',
    // vertical: true,
    label: false,
    selections: {
      button: 'Button',
      menu: 'Menu',
      row: 'Row'
    },
  } ),

  app.formDSL.designer.navigation.button( blueprint )(f),
  app.formDSL.designer.navigation.menu( blueprint )(f),
  app.formDSL.designer.navigation.row( blueprint )(f),

]
