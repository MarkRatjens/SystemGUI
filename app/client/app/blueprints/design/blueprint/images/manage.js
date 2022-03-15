app.blueprints.design.blueprint.images.manage = (route, blueprint) => 
app.blueprints.design.blueprint.form({
  route: route,
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
              key: 'runtimes',
              as: 'hidden',
            }),
            fff.field({
              key: 'identifier',
              as: 'hidden',
            }),
            fff.field({
              key: 'output_identifier',
              as: 'hidden',
            }),
            a['div.float-right']([
              fff.up({buttonTag: {class: 'btn app-btn'}}),
              fff.down({buttonTag: {class: 'btn app-btn'}}),
              fff.remove({buttonTag: {class: 'btn app-btn'}}),
            ]),
            a['div.pt-2.pb-2']([
              `${fff.object.identifier} `,
              a.small((fff.object.runtimes || []).join(', ')),
            ]),
          ]
        }),
      ]
    }),
  ],
  digest: (form) => {
    if (form.images.length) {
      blueprint.images = form.images
    } else {
      delete blueprint.images
    };
    return {model: blueprint};
  },
})
