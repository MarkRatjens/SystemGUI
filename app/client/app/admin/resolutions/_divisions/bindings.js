app.admin.resolutions.bindings = (route, resolution) =>
route.mount({
  routes: {
    '/:bindingIndex': (route) => app.admin.resolutions.bindings.edit(route, resolution)
  }
})
