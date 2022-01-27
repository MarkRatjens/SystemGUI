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
            counts.unshift(nest.index + 1)
          }
          nest = nest.parent
        }
        return ax.a.h5(`Column ${counts.join('.')}`, {class: 'mt-2'})
      },
    } ),
  ]
} )
