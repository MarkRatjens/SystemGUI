app.formDSL.designer.form.component = f => [
  ax.a({
    $tag: 'h5',
    $text: () => `Form component ${f.index + 1}`,
    name: f.scope,
    $rescope: (el) => el.$render,
  }),
  f.field( {
    key: 'type',
    as: 'select',
    label: false,
    // vertical: true,
    selections: [
      { value: 'field', label: 'Field' },
      { value: 'fieldset', label: 'Fieldset' },
      { value: 'row', label: 'Row' },
      // { value: 'template', label: 'Template' },
    ],
  } ),

  app.formDSL.designer.form.field(f),
  app.formDSL.designer.form.fieldset(f),
  app.formDSL.designer.form.row(f),
  // app.formDSL.designer.report.template(f)

]
