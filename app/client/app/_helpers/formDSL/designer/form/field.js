app.formDSL.designer.form.field = f => (a,x) => f.field( {
  key: 'field',
  as: 'one',
  label: false,
  vertical: true,
  dependent: {
    key: 'type',
    pattern: '^field$',
  },
  form: ff => [

    app.tabs({
      tabs: [
        {
          label: 'Control',
          body: app.formDSL.designer.form.field.control(ff),
        },
        {
          label: 'Appearance',
          body: app.formDSL.designer.form.field.appearance(ff),
        },
        {
          label: 'Value',
          body: app.formDSL.designer.form.field.value(ff),
        },
        {
          label: 'Help',
          body: app.formDSL.designer.form.field.help(ff),
        },
        {
          label: 'Dependent',
          body: app.formDSL.designer.form.field.dependent(ff),
        },
        {
          label: 'Validation',
          body: app.formDSL.designer.form.field.validation(ff),
        },
        {
          label: 'Collection',
          body: app.formDSL.designer.form.field.collection(ff),
        },
      ],
      tabBodyTag: {
        class: 'well',
      },
    }),

    // NESTED COMPONENTS
    ff.fieldset( {
      label: false,
      body: app.collapse( {
        label: 'Components',
        body: app.formDSL.designer.form.components(ff),
      } ),
      dependent: {
        key: 'control',
        pattern: '^(one|many|table)$',
      }
    } ),

    a.hr,

  ]
} )
