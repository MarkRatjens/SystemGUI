app.resolutions.domain.edit = (router, resolution) =>
app.resolutions.form({
  router: router,
  object: resolution,
  form: f => [
    f.field({
      key: 'domain',
      as: 'one',
      form: (ff) => [
        ff.field({
          key: 'identifier',
          label: false,
        })
      ],
    }),
  ],
  update: (form) => {
    resolution.domain = form.domain
    return resolution;
  },
})
