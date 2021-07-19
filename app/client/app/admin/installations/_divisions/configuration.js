app.admin.installations.configuration = (route, installation) =>
route.mount({
  routes: {
    '*': (route) => app.admin.installations.configuration.edit(route, installation)
  }
})
