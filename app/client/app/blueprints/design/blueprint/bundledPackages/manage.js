app.blueprints.design.blueprint.bundledPackages.manage = (route, blueprint) => 
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: f => [
    f.field({
      key: 'bundled_packages',
      as: 'nest',
      form: (ff) => [
        ff.items({
          collection: true,
          singular: 'bundled package',
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
                fff.object.target.identifier || '', ' ',
                fff.object.target.repository || a['.error']('No repository'), ' ',
                fff.object.target.branch ? a.small(`${fff.object.target.branch}`) : '',
              ]) : '',
            ]),
          ]
        }),
      ]
    }),
  ],
  digest: (form) => {
    if (form.bundled_packages.length) {
      blueprint.bundled_packages = form.bundled_packages
    } else {
      delete blueprint.bundled_packages
    };
    return {model: blueprint};
  },
})
