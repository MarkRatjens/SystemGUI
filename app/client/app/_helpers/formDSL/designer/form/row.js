app.formDSL.designer.form.row = (f) => f.field( {
  key: 'row',
  as: 'one',
  label: false,
  // vertical: true,
  dependent: {
    key: 'type',
    pattern: '^row$',
  },
  form: ff => [

    app.collapse( {
      label: 'Columns',
      body: [

        ff.field( {
          key: 'columns',
          as: 'many',
          collection: true,
          singular: 'column',
          form: fff => [
            ax.a({
              $tag: 'h5',
              $text: () => `Column ${fff.index + 1} ${fff.scope}`,
              name: fff.scope,
              $rescope: (el) => () => {
                el.$render()
              },
            }),
            app.formDSL.designer.form.components(fff),
          ],
          label: false,
          addable: true,
          removeable: true,
          moveable: true,
          // vertical: true,
        } ),
      ],
    } ),

  ]
} )
