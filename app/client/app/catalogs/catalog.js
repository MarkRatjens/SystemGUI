app.catalogs.catalog = (route) => a['app-catalogs-catalog']([
  app.close(route),
  a['h5.mt-2']([
    a['h5.py-2'](`${route.params.catalogIdentifier}`),
  ]),
  route.mount({
    routes: {
      '/?': app.catalogs.show,
      '/delete': app.catalogs.delete,
      '/edit': app.catalogs.edit,
    }
  }),
])
