app.domains.new = (route) => a['app-domains-new']([
  a.h3("New domain"),
  app.jsonForm({
    url: '/api/domains',
    method: 'POST',
    horizontal: true,
    route: route,
    form: (f) => [
      f.field({
        key: 'identifier',
        label: 'Name',
        required: true,
        pattern: '^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$',
        invalid: 'Please enter a valid domain name.',
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
