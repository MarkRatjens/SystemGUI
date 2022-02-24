app.domains.domain = (route) => a['app-domains-domain']([
  a['h5.mt-2']([
    a.h5(`${route.params.domainIdentifier}`),
  ]),
  route.mount({
    routes: {
      '/?': app.domains.show,
      '/delete': app.domains.delete,
      '/edit': app.domains.edit,
    }
  }),
])
