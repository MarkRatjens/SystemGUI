app.admin.resolutions.bindings = (router, resolution) =>
router.mount({
  routes: {
    '*': (router) => app.admin.resolutions.bindings.edit(router, resolution)
  }
})
