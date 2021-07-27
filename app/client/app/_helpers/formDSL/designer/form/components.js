app.formDSL.designer.form.components = f => (a,x) => [

  f.field( {
    key: 'components',
    as: 'many',
    label: false,
    singular: 'form component',
    collection: true,
    form: app.formDSL.designer.form.component,
    removeable: true,
    addable: true,
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
      return a.h5(`Form component ${counts.join('.')}`, {class: 'mt-2'})
    },
  } ),

]
