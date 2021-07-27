app.formDSL.designer.output = f => f.fieldset( {
  label: false,
  body: [
    f.field( {
      key: 'output',
      as: 'one',
      label: false,
      form: ff => [
        app.collapse( {
          label: 'Options',
          body: [
            ff.field( {
              key: 'dig',
              hint: `dot-separated keys, such as 'user.name'`
            } ),
          ]
        } ),
      ],
    } ),
  ],
  dependent: {
    key: 'type',
    pattern: '^output$',
  },
} )
