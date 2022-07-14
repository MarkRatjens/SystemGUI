app.apps.new = (route) => a['app-apps-new']([
  a.h3("New app"),
  app.jsonForm({
    url: '/api/apps',
    method: 'POST',
    horizontal: true,
    route: route,
    form: (f) => [
      f.field({
        key: 'identifier',
        label: 'Name',
        required: true,
        pattern: '^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$',
        invalid: 'Please enter a valid app name.',
      }),
      f.field({
        key: 'primary',
        as: 'checkbox',
        ingest: (value) => value ? 'on' : '',
        digest: (value) => value == 'on' ? true : false,
      }),
    ],
    digest: (form) => ({model: form}),
  }),
])
