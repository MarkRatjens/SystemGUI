app.apps.app = (route) => a['app-apps-app']([
  app.close(route),
  a['h5.mt-2']([
    a['h5.py-2'](`${route.params.appIdentifier}`),
  ]),
  route.mount({
    routes: {
      '/?': app.apps.show,
      '/delete': app.apps.delete,
      '/edit': app.apps.edit,
    }
  }),
])
