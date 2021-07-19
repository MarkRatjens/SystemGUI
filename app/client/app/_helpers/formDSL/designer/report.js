app.formDSL.designer.report = blueprint => f => f.field( {
    key: 'report',
    as: 'one',
    label: false,
    // vertical: true,
    dependent: {
      key: 'type',
      pattern: '^report$',
    },
    form: (ff) => [

      app.collapse( {
        label: 'Components',
        body: app.formDSL.designer.report.components( blueprint )(ff),
      } ),

    ]
  } )
