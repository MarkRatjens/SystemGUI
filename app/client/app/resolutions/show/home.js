app.resolutions.show.home = (router, resolution) => (a,x) => [

  app.http({
    url: `/api/resolutions/${router.params.resolution_id}/validity`,
    placeholder: app.spinner('Checking status'),
    success: (validity, el) => el.$nodes =
      validity.errors ?
      a['.error'](app.icon('fa fa-warning', `Incomplete: ${validity.errors.incomplete_divisions.join(', ')}`)) :
      a['.success'](app.icon('fa fa-check', 'Complete'))
  }),

  [
    'domain',
    'bindings',
  ].map(
    (division) => app.resolutions.show.division(router, resolution, division)
  ),

]
