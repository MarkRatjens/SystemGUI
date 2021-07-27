app.formDSL.designer.navigation.components = blueprint => f => f.field( {
  key: 'components',
  singular: 'navigation component',
  label: false,
  as: 'many',
  collection: true,
  form: app.formDSL.designer.navigation.component(blueprint),
  addable: true,
  removeable: true,
} )
