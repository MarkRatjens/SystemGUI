app.admin.blueprints.packing = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.admin.blueprints.packing.edit(router, blueprint)
  }
})
