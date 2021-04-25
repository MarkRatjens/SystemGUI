app.admin.resolutions.edit.home = (router, resolution) => (a,x) => a.div([

  app.fetch({
    url: `/api/resolutions/${router.params.resolution_id}/validity`,
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
    (division) => app.admin.resolutions[division].preview(router, resolution)
  ),

])
