app.blueprints.images.form =
(f) => f.row({
  columns: [
    [
      f.field({
        key: 'type',
        required: true,
        as: 'select',
        selections: {
          docker: 'Docker',
          lxd: 'LXD',
        },
      }),
      f.field({
        key: 'image',
        required: true,
      }),
    ],
    f.field({
      key: 'scripts',
      as: 'one',
      form: (ff) => [
        ff.field({
          key: 'shell',
          as: 'checkboxes',
          selections: environment.$state.build_scripts.shell,
          label: false,
          required: true,
          moveable: true,
          removeable: true,
          addable: true,
        })
      ]
    }),
  ]
}),
