app.apps = (route) => a['app-apps']([
  route.mount({
    routes: {
      '/?': app.apps.index,
      '/new': app.apps.new,
      '/@:appIdentifier/?*': app.apps.app,
    }
  }),
])
