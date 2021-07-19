app.formDSL.designer.navigation.components = blueprint => f => f.field( {
  key: 'components',
  singular: 'navigation component',
  label: false,
  // vertical: true,
  as: 'many',
  collection: true,
  form: app.formDSL.designer.navigation.component(blueprint),
  addable: true,
  removeable: true,
} )
