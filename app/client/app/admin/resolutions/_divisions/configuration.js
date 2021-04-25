app.admin.resolutions.configuration = (router, resolution) =>
router.mount({
  routes: {
    '*': (router) => app.admin.resolutions.configuration.edit(router, resolution)
  }
})
