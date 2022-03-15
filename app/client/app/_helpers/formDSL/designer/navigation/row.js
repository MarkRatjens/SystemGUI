app.formDSL.designer.navigation.row = blueprint => f => f.field( {
  key: 'row',
  as: 'one',
  label: false,
  dependent: {
    key: 'type',
    pattern: '^row$',
  },
  form: (ff) => [

    app.collapse( {
      label: 'Columns',
      body: ff.field( {
        key: 'columns',
        as: 'many',
        collection: true,
        singular: 'column',
        label: false,
        itemsTag: {
          $on: {
            'ax.appkit.form.nest.items.change: rerender headings': (e, el) => {
              el.$$('|dialogue-navigation-row-column-heading').$render()
            },
          }
        },
        form: fff => [
          ax.a['h6|dialogue-navigation-row-column-heading']({
            $text: (el) => `Column ${fff.index + 1}`,
          }),
          app.formDSL.designer.navigation.components(blueprint)(fff),
        ]
      } ),
    })

  ],
} )
