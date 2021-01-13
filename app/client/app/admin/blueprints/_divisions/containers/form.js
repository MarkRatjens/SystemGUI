app.admin.blueprints.containers.form =
(f) => [
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
  }),
  // f.field({
  //   key: 'ports',
  //   as: 'table',
  //   collection: true,
  //   addable: true,
  //   removeable: true,
  //   moveable: true,
  //   singular: 'port',
  //   form: (ff) => [
  //     ff.field({
  //       key: 'protocol',
  //       as: 'select',
  //       selections: {
  //         'tcp': 'TCP',
  //       },
  //       required: true,
  //       label: false,
  //     }),
  //     ff.field({
  //       key: 'port',
  //       required: true,
  //       label: false,
  //     }),
  //   ]
  // }),
]
