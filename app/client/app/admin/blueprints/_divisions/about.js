app.admin.blueprints.about = (router, blueprint) =>
router.mount({
  routes: {
    '/edit/?': router => app.admin.blueprints.about.edit(router, blueprint),
    '/icon*': app.admin.blueprints.about.icon,
    '/readme*': app.admin.blueprints.about.readme,
    '/license*': app.admin.blueprints.about.license,
    '*': (router) => app.admin.blueprints.about.show(router, blueprint)
  }
})
