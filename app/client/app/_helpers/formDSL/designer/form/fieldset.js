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

    app.tabs({
      tabs: [
        {
          label: 'Appearance',
          body: app.formDSL.designer.form.fieldset.appearance(ff),
        },
        {
          label: 'Help',
          body: app.formDSL.designer.form.fieldset.help(ff),
        },
        {
          label: 'Dependent',
          body: app.formDSL.designer.form.fieldset.dependent(ff),
        },
      ],
      tabBodyTag: {
        class: 'well',
      },
    }),

    app.formDSL.designer.form.components(ff),

  ]

} )
