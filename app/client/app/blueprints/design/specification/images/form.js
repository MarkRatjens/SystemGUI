app.blueprints.design.specification.images.form =
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
  ]
}),
