app.domains.delete = (route) => a['app-domains-delete']([
  a.h3("Delete"),
  a.p('Are you sure that you want to delete this domain?'),
  app.jsonForm({
    url: `/api/domains/@${route.params.domainIdentifier}`,
    method: 'DELETE',
    route: route,
    success: () => route.open('../..'),
  }),
])
