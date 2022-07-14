app.providers.new = (route) => a.div([
  a.h3('New provider'),
  app.jsonForm({
    url: '/api/providers',
    method: 'POST',
    scope: 'provider',
    route: route,
    form: (f) => [
      f.field({
        key: 'identifier',
        required: true,
      }),
      f.field({
        key: 'qualifier',
        label: false,
        as: 'select',
        required: true,
        placeholder: 'Select provider',
        selections: app.providers.types.qualifiers,
      }),
    ],
    digest: (form) => ({model: form.provider}),
    success: (providerIdentifier) => route.open(`../@${providerIdentifier}`),
  }),
])
