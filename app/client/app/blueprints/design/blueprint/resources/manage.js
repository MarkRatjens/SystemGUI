app.blueprints.design.blueprint.resources.manage = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: f => [
    f.field({
      key: 'resources',
      as: 'nest',
      form: (ff) => [
        ff.items({
          collection: true,
          singular: 'resource',
          moveable: true,
          removeable: true,
          form: (fff) => [
            fff.field({
              key: 'type',
              as: 'hidden',
            }),
            fff.field({
              key: 'identifier',
              as: 'hidden',
            }),
            fff.field({
              key: 'configuration',
              as: 'hidden',
            }),
            a['div.float-right']([
              fff.up({buttonTag: {class: 'btn app-btn'}}),
              fff.down({buttonTag: {class: 'btn app-btn'}}),
              fff.remove({buttonTag: {class: 'btn app-btn'}}),
            ]),
            a['div.pt-2.pb-2']([
              `${fff.object.type} `,
              a.small(fff.object.identifier || ''),
            ]),
          ]
        }),
      ]
    }),
  ],
  digest: (form) => {
    if (form.resources.length) {
      blueprint.resources = app.compact(form.resources)
    } else {
      delete blueprint.resources
    };
    return {model: blueprint};
  },
})
