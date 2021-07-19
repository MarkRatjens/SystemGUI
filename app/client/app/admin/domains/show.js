app.admin.domains.show = (route) => (a,x) => a.div([
//   app.closeOld(() => route.open('/admin/')),
  app.close(route),
  a.h1(`${route.params.domain_id} domain`),
  a.hr,
  app.fetch({
    url: `/api/domains/${route.params.domain_id}`,
    placeholder: app.spinner('Loading domain'),
    success: (domain, el) => el.$nodes =
    domain

  }),
])
