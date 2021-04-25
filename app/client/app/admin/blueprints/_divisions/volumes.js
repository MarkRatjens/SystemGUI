app.admin.blueprints.volumes = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.admin.blueprints.volumes.edit(router, blueprint)
  }
})
