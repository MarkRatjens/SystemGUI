app.images.image = (route) => a['app-images-image']([
  app.close(route),
  a['h5.mt-2']([
    a['h5.py-2'](`${route.params.imageIdentifier}`),
  ]),
  route.mount({
    routes: {
      '/?': app.images.show,
      '/delete': app.images.delete,
    }
  }),
])
