app.admin.resolutions.configuration.edit = (router, resolution) => [  
  app.admin.resolutions.form({
    router: router,
    object: resolution,
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
            Object.keys(ff.object).map((key) => ff.field({
              key: key,
              label: key,
              horizontal: true,
            })),
          ]
        }),
      ],
      update: (form) => {
        resolution.configuration = form.configuration
        return resolution;
      },
    })
]
