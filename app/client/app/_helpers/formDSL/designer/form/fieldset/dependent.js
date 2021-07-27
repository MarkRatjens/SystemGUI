app.formDSL.designer.form.fieldset.dependent = (f) => [
  f.field( {
    key: 'dependent',
    label: false,
    as: 'table',
    collection: true,
    singular: 'dependency',
    addable: true,
    removeable: true,
    moveable: true,
    form: (ff) => [
      ff.field( {
        key: 'target',
        required: true,
      } ),
      ff.field( {
        key: 'pattern',
      } ),
    ],
  } ),
]
