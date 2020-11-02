app.domains.show = (router) => (a,x) => [
  app.close(() => router.open('/')),
  a.h1(`${router.params.domain_id} domain`),
  a.hr,
  app.http({
    url: `/api/domains/${router.params.domain_id}`,
    placeholder: app.spinner('Loading domain'),
    success: (domain, el) => el.$nodes =
    domain

  }),
]
