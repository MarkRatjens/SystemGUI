app.admin.blueprints.bindings.manage = (router, blueprint) => (a, x) =>
app.admin.blueprints.form({
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
          form: (fff) => [
            fff.field({
              key: 'identifier',
              as: 'hidden',
            }),
            fff.field({
              key: 'target_identifier',
              as: 'hidden',
            }),
            fff.field({
              key: 'type',
              as: 'hidden',
            }),
            a['div.float-right']([
              fff.up({buttonTag: {class: 'btn'}}),
              fff.down({buttonTag: {class: 'btn'}}),
              fff.remove({buttonTag: {class: 'btn'}}),
            ]),
            a['div.pt-2.pb-2']([
              fff.object.identifier,
              ' ',
              fff.object.identifier != fff.object.target_identifier ? fff.object.target_identifier : a._,
              ' ',
              fff.object.type == 'embed' ? a.small('embed') : a._,
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
