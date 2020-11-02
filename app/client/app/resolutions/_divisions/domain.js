app.resolutions.domain = (router, resolution) =>
router.mount({
  routes: {
    '*': (router) => app.resolutions.domain.edit(router, resolution)
  }
})
