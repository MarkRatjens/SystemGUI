app.admin.blueprints.images.manage = (router, blueprint) => (a, x) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'images',
      as: 'nest',
      form: (ff) => [
        ff.items({
          collection: true,
          singular: 'image',
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
              key: 'scripts',
              as: 'hidden',
            }),
            a['div.float-right']([
              fff.up({buttonTag: {class: 'btn'}}),
              fff.down({buttonTag: {class: 'btn'}}),
              fff.remove({buttonTag: {class: 'btn'}}),
            ]),
            a['div.pt-2.pb-2']([
              `${fff.object.type}:${fff.object.image}`,
              x.lib.object.dig(fff.object, ['scripts', 'shell', 'length']) ?
              a.small(` ${fff.object.scripts.shell.length} shell scripts`) : a._
            ]),
          ]
        }),
      ]
    }),
  ],
  update: (form) => {
    if (form.images.length) {
      blueprint.images = form.images
    } else {
      delete blueprint.images
    };
    return blueprint;
  },
})
