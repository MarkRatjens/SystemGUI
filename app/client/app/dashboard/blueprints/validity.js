app.dashboard.blueprints.validity = (router, resolution) => (a,x) =>

a['app-resolution-validity']([
  app.http({
    url: `/api/resolutions/${router.params.blueprint_id}/validity`,
    // placeholder: app.spinner('Checking validity'),
    success: (validity, el) => el.$nodes =
    validity.errors ?
    a['.error.pl-2'](app.icon('fa fa-warning', `Invalid: ${validity.errors.incomplete_divisions.join(', ')}`)) :
    a['.success.pl-2'](app.icon('fa fa-check', 'Valid'))
  }),
])
