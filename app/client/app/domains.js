app.domains = (route) => a['app-domains']([
  route.mount({
    routes: {
      '/?': app.domains.index,
      '/new': app.domains.new,
      '/@:domainIdentifier/?*': app.domains.domain,
    }
  }),
])
