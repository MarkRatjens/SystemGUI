app.formDSL.designer.component = blueprint => f => [

  f.field( {
    key: 'type',
    as: 'select',
    label: false,
    selections: {
      output: 'Output',
      form: 'Form',
      report: 'Report',
      template: 'Template',
      navigation: 'Navigation',
    },
  } ),

  app.formDSL.designer.output(f),
  app.formDSL.designer.form(blueprint)(f),
  app.formDSL.designer.report(blueprint)(f),
  app.formDSL.designer.template(f),
  app.formDSL.designer.navigation(blueprint)(f),

]
