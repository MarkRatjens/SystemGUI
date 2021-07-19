app.formDSL.designer.form.fieldset = (f) => f.field( {
  key: 'fieldset',
  as: 'one',
  label: false,
  // vertical: true,
  dependent: {
    key: 'type',
    pattern: '^fieldset$',
  },
  form: ff => [

    app.collapse( {
      label: 'Options',
      body: [

        ff.field( {
          key: 'label',
        } ),

        ff.field( {
          key: 'legend',
        } ),

        ff.field( {
          key: 'horizontal',
          as: 'checkbox',
        } ),

        ff.field( {
          key: 'dependent',
          as: 'many',
          collection: true,
          singular: 'dependency',
          addable: true,
          removeable: true,
          moveable: true,
          form: (fff) => fff.row( { columns: [
            fff.field( {
              key: 'target',
            } ),
            fff.field( {
              key: 'pattern',
            } ),
          ] } ),
        } ),

      ],
    } ),

    app.collapse( {
      label: 'Components',
      body: app.formDSL.designer.form.components(ff),
    } ),

  ]

} )
