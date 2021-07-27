app.formDSL.designer.navigation.menu = blueprint => f => f.field( {
  key: 'menu',
  as: 'one',
  label: false,
  form: ff => [

    ff.field( {
      key: 'label',
      as: 'one',
      form: (fff) => [
        fff.field( {
          key: 'display',
          label: false,
          as: 'select',
          placeholder: 'Default',
          selections: {
            none: 'None',
            custom: 'Custom',
          }
        } ),
        fff.field( {
          key: 'custom',
          label: false,
          dependent: {
            key: 'display',
            value: 'custom'
          }
        } ),
      ],
    } ),

    ff.field( {
      key: 'style',
      as: 'select',
      placeholder: 'Default',
      selections: {
        none: 'None',
        primary: 'Primary',
        secondary: 'Secondary',
        warning: 'Warning',
        danger: 'Danger',
      },
    } ),

    app.formDSL.designer.navigation.components(blueprint)(ff)


  ],
  dependent: {
    key: 'type',
    value: 'menu',
  }
} ),
