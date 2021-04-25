app.admin.resolutions.bindings = (router, resolution) =>
router.mount({
  routes: {
    '/:binding_id': (router) => app.admin.resolutions.bindings.edit(router, resolution)
  }
})
