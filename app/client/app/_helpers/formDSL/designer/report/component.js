app.formDSL.designer.report.component = blueprint => f => [

  f.field( {
    key: 'type',
    as: 'select',
    label: false,
    selections: [
      { value: 'field', label: 'Field' },
      { value: 'fieldset', label: 'Fieldset' },
      { value: 'row', label: 'Row' },
      { value: 'form', label: 'Form' },
      { value: 'navigation', label: 'Navigation' },
      { value: 'template', label: 'Template' },
    ],
  } ),

  app.formDSL.designer.report.field( blueprint )(f),
  app.formDSL.designer.report.fieldset( blueprint )(f),
  app.formDSL.designer.report.row( blueprint )(f),
  app.formDSL.designer.report.form( blueprint )(f),
  app.formDSL.designer.navigation( blueprint )(f),
  app.formDSL.designer.report.template(f),

]
