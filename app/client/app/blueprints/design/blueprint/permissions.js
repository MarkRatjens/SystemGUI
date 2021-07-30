app.blueprints.design.blueprint.permissions = (route, blueprint) =>
route.mount({
  routes: {
    '/permissions/?': (route) => app.blueprints.design.blueprint.permissions.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.permissions.preview(route, blueprint)
  }
})
