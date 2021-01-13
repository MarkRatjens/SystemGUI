app.admin.resolutions.show.home = (router, resolution) => (a,x) => [

  app.http({
    url: `/api/resolutions/${router.params.resolution_id}/validity`,
    placeholder: app.spinner('Checking status'),
    success: (validity, el) => el.$nodes =
      validity.errors ?
      a['.error'](app.icon('fa fa-warning', `Invalid: ${validity.errors.incomplete_divisions.join(', ')}`)) :
      a['.success'](app.icon('fa fa-check', 'Valid'))
  }),

  [
    'domain',
    'bindings',
  ].map(
    (division) => app.admin.resolutions.show.division(router, resolution, division)
  ),

]
