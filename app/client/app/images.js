app.images = (route) => a['app-images']([
  route.mount({
    routes: {
      '/?': app.images.index,
      '/@:imageIdentifier/?*': app.images.image,
    },
  }),
])
