app.admin.resolutions.configuration = (route, resolution) =>
route.mount({
  routes: {
    '*': (route) => app.admin.resolutions.configuration.edit(route, resolution)
  }
})
