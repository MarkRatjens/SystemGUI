app.admin.blueprints.specification.images = (route, specification) =>
route.mount({
  routes: {
    '/?': (route) => app.admin.blueprints.specification.images.preview(route, specification),
    '/images/?': (route) => app.admin.blueprints.specification.images.index(route, specification),
    '/images/new': (route) => app.admin.blueprints.specification.images.new(route, specification),
    '/images/manage': (route) => app.admin.blueprints.specification.images.manage(route, specification),
    '/images/:image_id*': (route) => app.admin.blueprints.specification.images.edit(route, specification),
  }
})
