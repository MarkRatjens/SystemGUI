app.providers = (route) => a['app-providers']([
  route.mount({
    routes: {
      '/?': app.providers.index,
      '/new': app.providers.new,
      '/@:providerIdentifier/?*': app.providers.provider,
    },
  }),
])
