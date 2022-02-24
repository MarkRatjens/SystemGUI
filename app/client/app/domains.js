app.domains = (route) => a['app-domains']([
  app.close(route),
  route.mount({
    routes: {
      '/?': app.domains.index,
      '/new': app.domains.new,
      '/@:domainIdentifier/?*': app.domains.domain,
    }
  }),
])
