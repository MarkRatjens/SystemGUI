app.blueprints.design.specification.images = (route, specification) =>
route.mount({
  routes: {
    '/?': (route) => app.blueprints.design.specification.images.preview(route, specification),
    '/images/?': (route) => app.blueprints.design.specification.images.index(route, specification),
    '/images/new': (route) => app.blueprints.design.specification.images.new(route, specification),
    '/images/manage': (route) => app.blueprints.design.specification.images.manage(route, specification),
    '/images/:image_id*': (route) => app.blueprints.design.specification.images.edit(route, specification),
  }
})
