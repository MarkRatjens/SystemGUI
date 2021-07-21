app.admin.installations.domain.edit = (route, installation) =>
app.admin.installations.form({
  route: route,
  object: installation,
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
  digest: (form) => {
    installation.domain = form.domain
    return installation;
  },
})
