app.admin.installations.domain = (route, installation) =>
route.mount({
  routes: {
    '*': (route) => app.admin.installations.domain.edit(route, installation)
  }
})
