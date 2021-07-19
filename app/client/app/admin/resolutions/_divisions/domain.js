app.admin.resolutions.domain = (route, resolution) =>
route.mount({
  routes: {
    '*': (route) => app.admin.resolutions.domain.edit(route, resolution)
  }
})
