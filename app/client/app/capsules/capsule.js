app.capsules.capsule = (route) => a['app-capsules-capsule']([
  app.close(route),
  a['h5.mt-2']([
    a['h5.py-2'](`${route.params.capsuleIdentifier}`),
  ]),
  route.mount({
    routes: {
      '/?': app.capsules.show,
      '/delete': app.capsules.delete,
    }
  }),
])
