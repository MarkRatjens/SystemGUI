app.resolutions.bindings.edit = (router, resolution) => (a,x) =>
app.resolutions.form({
  router: router,
  object: resolution,
  form: f => [
    f.field({
      key: 'bindings',
      as: 'many',
      collection: true,
      form: (ff) => [
        [
          ff.object.identifier ? a.div(ff.object.identifier) : null,
          ff.object.descriptor ? a.div([
            ff.object.descriptor.repository || a['.error']('No repository'), ' ',
            ff.object.descriptor.branch ? ff.object.descriptor.branch : ' ',
            ff.object.descriptor.identifier || null,
          ]) : null,
        ],
        ff.field({
          key: 'descriptor',
          as: 'hidden',
        }),
        ff.field({
          key: 'variables',
          label: false,
          as: 'one',
          form: (fff) => [
            Object.keys(fff.object).map((key) => fff.field({
              key: key
            })),
          ]
        })
      ]
    })
  ],
  update: (form) => {
    resolution.bindings = form.bindings
    return resolution;
  },
})
