app.admin.resolutions.bindings = (router, resolution) =>
router.mount({
  routes: {
    '/:bindingIndex': (router) => app.admin.resolutions.bindings.edit(router, resolution)
  }
})
