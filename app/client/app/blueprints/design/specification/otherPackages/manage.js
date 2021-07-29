app.blueprints.design.specification.otherPackages.manage = (route, specification) => (a, x) =>
app.blueprints.design.specification.form({
  route: route,
  object: specification,
  form: f => [
    f.field({
      key: 'other_packages',
      as: 'nest',
      form: (ff) => [
        ff.items({
          collection: true,
          singular: 'other package',
          form: (fff) => [
            fff.field({
              key: 'target',
              as: 'hidden',
            }),
            fff.field({
              key: 'extraction',
              as: 'hidden',
            }),
            fff.field({
              key: 'extracted_path',
              as: 'hidden',
            }),
            fff.field({
              key: 'destination',
              as: 'hidden',
            }),
            a['div.float-right']([
              fff.up({buttonTag: {class: 'btn app-btn'}}),
              fff.down({buttonTag: {class: 'btn app-btn'}}),
              fff.remove({buttonTag: {class: 'btn app-btn'}}),
            ]),
            a['div.pt-2.pb-2']([
              fff.object.target ? a.div([
                fff.object.target.identifier || null, ' ',
                fff.object.target.repository || a['.error']('No repository'), ' ',
                fff.object.target.branch ? a.small(`${fff.object.target.branch}`) : null,
              ]) : null,
            ]),
          ]
        }),
      ]
    }),
  ],
  digest: (form) => {
    if (form.other_packages.length) {
      specification.other_packages = form.other_packages
    } else {
      delete specification.other_packages
    };
    return {specification: specification};
  },
})
