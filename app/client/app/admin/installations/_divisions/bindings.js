app.admin.installations.bindings = (route, installation) =>
route.mount({
  routes: {
    '/:bindingIndex': (route) => app.admin.installations.bindings.edit(route, installation)
  }
})
