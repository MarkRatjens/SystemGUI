app.admin.domains.show = (router) => (a,x) => a.div([
//   app.closeOld(() => router.open('/admin/')),
  app.close(router),
  a.h1(`${router.params.domain_id} domain`),
  a.hr,
  app.fetch({
    url: `/api/domains/${router.params.domain_id}`,
    placeholder: app.spinner('Loading domain'),
    success: (domain, el) => el.$nodes =
    domain

  }),
])
