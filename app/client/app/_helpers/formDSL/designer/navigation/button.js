app.formDSL.designer.navigation.button = blueprint => f => f.field( {
  key: 'button',
  as: 'one',
  label: false,
  form: app.formDSL.designer.button(blueprint),
  dependent: {
    key: 'type',
    value: 'button',
  }
} ),
