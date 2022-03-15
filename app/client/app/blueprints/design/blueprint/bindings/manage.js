app.blueprints.design.blueprint.bindings.manage = (route, blueprint) => 
app.blueprints.design.blueprint.form({
  route: route,
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
  digest: (form) => {
    if (form.bindings.length) {
      blueprint.bindings = form.bindings
    } else {
      delete blueprint.bindings
    };
    return {model: blueprint};
  },
})
