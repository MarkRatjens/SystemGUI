app.formDSL.designer.form = blueprint => f => f.field( {
  key: 'form',
  as: 'one',
  label: false,
  dependent: {
    key: 'type',
    pattern: '^form$',
  },
  form: (ff) => [

    app.collapse( {
      label: 'Components',
      body: app.formDSL.designer.form.components(ff),
    } ),

    app.collapse( {
      label: 'Buttons',
      body: [
        ff.field( {
          key: 'cancel',
          label: 'Cancel',
          as: 'one',
          form: app.formDSL.designer.button( blueprint ),
        } ),
        ff.field( {
          key: 'submit',
          label: 'Submit',
          as: 'one',
          form: app.formDSL.designer.button( blueprint ),
        } ),
      ],
    } ),

  ]
} )
