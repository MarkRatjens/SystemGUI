app.catalogs = (route) => a['app-catalogs']([
  route.mount({
    routes: {
      '/?': app.catalogs.index,
      '/new': app.catalogs.new,
      '/@:catalogIdentifier/?*': app.catalogs.catalog,
    }
  }),
])
