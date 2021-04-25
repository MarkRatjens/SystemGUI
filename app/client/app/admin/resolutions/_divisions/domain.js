app.admin.resolutions.domain = (router, resolution) =>
router.mount({
  routes: {
    '*': (router) => app.admin.resolutions.domain.edit(router, resolution)
  }
})
