app.admin.blueprints.binding_target = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.admin.blueprints.binding_target.edit(router, blueprint)
  }
})
