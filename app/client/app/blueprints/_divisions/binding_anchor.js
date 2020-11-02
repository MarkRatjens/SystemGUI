app.blueprints.binding_anchor = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.blueprints.binding_anchor.edit(router, blueprint)
  }
})
