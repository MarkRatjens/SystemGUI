app.providers.provider = (route) => a['app-providers-provider']([
  app.close(route),
  a['h5.mt-2']([
    a['h5.py-2'](`${route.params.providerIdentifier}`),
  ]),
  route.mount({
    routes: {
      '/?': app.providers.show,
      '/delete': app.providers.delete,
      '/edit': app.providers.edit,
    }
  }),
])
