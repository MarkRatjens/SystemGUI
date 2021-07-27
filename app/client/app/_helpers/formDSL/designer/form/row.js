app.formDSL.designer.form.row = (f) => f.field( {
  key: 'row',
  as: 'one',
  label: false,
  dependent: {
    key: 'type',
    pattern: '^row$',
  },
  form: ff => [
    ff.field( {
      key: 'columns',
      as: 'many',
      collection: true,
      singular: 'column',
      form: fff => [
        // ax.a({
        //   $tag: 'h5',
        //   $text: () => `Column ${fff.index + 1}`,
        //   name: fff.scope,
        //   $rescope: (el) => el.$render,
        // }),
        app.formDSL.designer.form.components(fff),
      ],
      label: false,
      addable: true,
      removeable: true,
      moveable: true,
      itemTitle: (f) => {
        let counts = []
        let nest = f
        while (nest) {
          if (ax.is.number(nest.index)) {
            counts.push(nest.index + 1)
          }
          nest = nest.parent
        }
        return ax.a.h5(`Column ${counts.join('.')}`, {class: 'mt-2'})
      },
    } ),
  ]
} )
