app.blueprints.design.blueprint.otherPackages.manage = (route, blueprint) => (a, x) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
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
              fff.up({xbuttonTag: {class: 'btn app-btn'}}),
              fff.down({xbuttonTag: {class: 'btn app-btn'}}),
              fff.remove({xbuttonTag: {class: 'btn app-btn'}}),
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
      blueprint.other_packages = form.other_packages
    } else {
      delete blueprint.other_packages
    };
    return {model: blueprint};
  },
})
