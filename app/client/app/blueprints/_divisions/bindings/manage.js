app.blueprints.bindings.manage = (router, blueprint) => (a, x) =>
app.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'bindings',
      as: 'nest',
      form: (ff) => [
        ff.items({
          collection: true,
          singular: 'binding',
          moveable: true,
          removeable: true,
          form: (fff) => [
            fff.field({
              key: 'descriptor',
              as: 'hidden',
            }),
            fff.field({
              key: 'variables',
              as: 'hidden',
            }),
            a['div.float-right']([
              fff.up({buttonTag: {class: 'btn'}}),
              fff.down({buttonTag: {class: 'btn'}}),
              fff.remove({buttonTag: {class: 'btn'}}),
            ]),
            a['div.pt-2.pb-2']([
              fff.object.identifier ? fff.object.identifier :
              fff.object.descriptor ? [
                fff.object.descriptor.repository || 'Unknown',
                fff.object.descriptor.branch ? ':' + fff.object.descriptor.branch : '',
              ] : null,
            ]),
          ]
        }),
      ]
    }),
  ],
  update: (form) => {
    if (form.bindings.length) {
      blueprint.bindings = form.bindings
    } else {
      delete blueprint.bindings
    };
    return blueprint;
  },
})
