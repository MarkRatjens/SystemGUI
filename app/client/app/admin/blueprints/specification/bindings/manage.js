app.admin.blueprints.specification.bindings.manage = (route, specification) => (a, x) =>
app.admin.blueprints.specification.form({
  route: route,
  object: specification,
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
              fff.up({buttonTag: {class: 'btn app-btn'}}),
              fff.down({buttonTag: {class: 'btn app-btn'}}),
              fff.remove({buttonTag: {class: 'btn app-btn'}}),
            ]),
            a['div.pt-2.pb-2']([
              app.bindingLabel(fff.object),
            ]),
          ]
        }),
      ]
    }),
  ],
  update: (form) => {
    if (form.bindings.length) {
      specification.bindings = form.bindings
    } else {
      delete specification.bindings
    };
    return specification;
  },
})
