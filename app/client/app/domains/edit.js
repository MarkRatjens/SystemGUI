app.domains.edit = (route) => a['app-domains-edit']([
  app.fetch({
    url: `/api/domains/@${route.params.domainIdentifier}`,
    placeholder: app.spinner('Loading domain'),
    success: (domain) => app.jsonForm({
      url: `/api/domains/@${route.params.domainIdentifier}`,
      object: domain,
      route: route,
      form: f => [
        f.field({
          key: 'primary',
          as: 'checkbox',
          label: false,
          control: {label: 'Primary domain'},
          ingest: (value) => value ? 'on' : '',
          digest: (value) => value == 'on',
        }),
      ],
      digest: (form) => ({model: form}),
    })
  }),
])
