app.admin.blueprints.containers.manage = (router, blueprint) => (a, x) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'containers',
      as: 'nest',
      form: (ff) => [
        ff.items({
          collection: true,
          singular: 'container',
          moveable: true,
          removeable: true,
          form: (fff) => [
            fff.field({
              key: 'type',
              as: 'hidden',
            }),
            fff.field({
              key: 'image',
              as: 'hidden',
            }),
            fff.field({
              key: 'ports',
              as: 'hidden',
            }),
            a['div.float-right']([
              fff.up({buttonTag: {class: 'btn'}}),
              fff.down({buttonTag: {class: 'btn'}}),
              fff.remove({buttonTag: {class: 'btn'}}),
            ]),
            a['div.pt-2.pb-2']([
              `${fff.object.type}:${fff.object.image}`,
              x.lib.object.dig(fff.object, ['ports', 'length']) ?
              a.small(fff.object.ports.map(
                (port) => ` ${port.protocol}:${port.port}`)
              ) : null
            ]),
          ]
        }),
      ]
    }),
  ],
  update: (form) => {
    if (form.containers.length) {
      blueprint.containers = form.containers
    } else {
      delete blueprint.containers
    };
    return blueprint;
  },
})
