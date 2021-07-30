app.blueprints.design.blueprint.images = (route, blueprint) =>
route.mount({
  routes: {
    '/?': (route) => app.blueprints.design.blueprint.images.preview(route, blueprint),
    '/images/?': (route) => app.blueprints.design.blueprint.images.index(route, blueprint),
    '/images/new': (route) => app.blueprints.design.blueprint.images.new(route, blueprint),
    '/images/manage': (route) => app.blueprints.design.blueprint.images.manage(route, blueprint),
    '/images/:image_id*': (route) => app.blueprints.design.blueprint.images.edit(route, blueprint),
  }
})
