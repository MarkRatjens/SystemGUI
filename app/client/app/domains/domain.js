app.domains.domain = (route) => a['app-domains-domain']([
  app.close(route),
  a['h5.mt-2']([
    a['h5.py-2'](`${route.params.domainIdentifier}`),
  ]),
  route.mount({
    routes: {
      '/?': app.domains.show,
      '/delete': app.domains.delete,
      '/edit': app.domains.edit,
    }
  }),
])
