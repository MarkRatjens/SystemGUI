app.admin.blueprints.other_packages.edit = (router, blueprint) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint,
  form: f => [
    f.field({
      key: 'other_packages',
      as: 'many',
      singular: 'other package',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      form: f => [
        f.field({
          key: 'descriptor',
          as: 'one',
          form: (ff) => [
            ff.field({
              key: 'repository',
              type: 'url',
            }),
            ff.field({
              key: 'branch',
            }),
            ff.field({
              key: 'identifier',
            }),
          ],
        }),
        f.field({
          key: 'extraction',
        }),
        f.field({
          key: 'extracted_path',
        }),
        f.field({
          key: 'destination',
        }),
      ],
    }),
  ],

  update: (form) => {
    debugger
    // if (form.other_packages.length) {
    //   blueprint.other_packages = form.other_packages
    // } else {
    //   delete blueprint.other_packages
    // };
    return blueprint;
  },
})
