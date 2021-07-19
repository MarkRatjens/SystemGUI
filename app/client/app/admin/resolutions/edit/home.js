app.admin.resolutions.edit.home = (route, resolution) => (a,x) => a.div([

  app.fetch({
    url: `/api/resolutions/${route.params.resolutionIdentifier}/validity`,
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
    (division) => app.admin.resolutions[division].preview(route, resolution)
  ),

])
