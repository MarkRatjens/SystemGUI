app.admin.resolutions.domain.edit = (route, resolution) =>
app.admin.resolutions.form({
  route: route,
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
