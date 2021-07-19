app.admin.installations.configuration.edit = (route, installation) => [
  app.admin.installations.form({
    route: route,
    object: installation,
    form: (f) => [
      f.field({
        key: 'configuration',
        as: 'one',
        // addable: true,
        // moveable: true,
        // removeable: true,
        // collection: true,
        // value: (v) => Object.keys(v).map((key) => ({
          //   key: key,
          //   value: v[key],
          // })),
          form: (ff) => [
            Object.keys(ff.object || {}).map((key) => ff.field({
              key: key,
              label: key,
              horizontal: true,
            })),
          ]
        }),
      ],
      update: (form) => {
        installation.configuration = form.configuration
        return installation;
      },
    })
]
