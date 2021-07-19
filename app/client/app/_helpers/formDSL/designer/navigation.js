app.formDSL.designer.navigation = blueprint => f => f.fieldset( {
  // vertical: true,
  label: false,
  body: [
    f.field( {
      key: 'navigation',
      as: 'one',
      label: false,
      // vertical: true,
      form: ff => [

        app.collapse( {
          label: 'Components',
          body: app.formDSL.designer.navigation.components(blueprint)(ff),
        } ),

      ],
    } ),
  ],
  dependent: {
    key: 'type',
    pattern: '^navigation$',
  },
} ),
