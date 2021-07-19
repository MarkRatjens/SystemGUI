app.formDSL.designer.report.form = blueprint => f => f.field( {
  key: 'form',
  as: 'one',
  label: false,
  // vertical: true,
  dependent: {
    key: 'type',
    pattern: '^form$',
  },
  form: ff => [

    app.collapse( {
      label: 'Options',
      body: [
        ff.field( {
          key: 'submit',
          label: 'Submit',
          as: 'one',
          form: app.formDSL.designer.button( blueprint ),
        } ),
      ],
    } ),

    app.collapse( {
      label: 'Form',
      body: app.formDSL.designer.form.components(ff),
    } ),

  ]
} )
