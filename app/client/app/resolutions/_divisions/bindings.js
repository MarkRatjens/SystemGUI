app.resolutions.bindings = (router, resolution) =>
router.mount({
  routes: {
    '*': (router) => app.resolutions.bindings.edit(router, resolution)
  }
})
