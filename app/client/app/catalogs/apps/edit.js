app.apps.edit = (route) => a['app-apps-edit']([
  app.fetch({
    url: `/api/apps/@${route.params.appIdentifier}`,
    placeholder: app.spinner('Loading app'),
    success: (app) => app.jsonForm({
      url: `/api/apps/@${route.params.appIdentifier}`,
      object: app,
      route: route,
      form: f => [
        f.field({
          key: 'primary',
          as: 'checkbox',
          label: false,
          control: {label: 'Primary app'},
          ingest: (value) => value ? 'on' : '',
          digest: (value) => value == 'on',
        }),
      ],
      digest: (form) => ({model: form}),
    })
  }),
])
