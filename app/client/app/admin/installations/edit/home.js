app.admin.installations.edit.home = (route, installation) => (a,x) => a.div([

  app.fetch({
    url: `/api/installations/${route.params.installationIdentifier}/validity`,
    placeholder: app.spinner('Checking status'),
    success: (validity, el) => validity.errors ?
    a['.error'](app.icon('fa fa-warning', `Invalid: ${validity.errors.incomplete_divisions.join(', ')}`)) :
    a['.success'](app.icon('fa fa-check', 'Valid'))
  }),

  [
    'domain',
    'configuration',
    'bindings',
  ].map(
    (division) => app.admin.installations[division].preview(route, installation)
  ),

])
