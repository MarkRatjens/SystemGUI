app.blueprints.design.license = (route, blueprint) => (a, x) => a['#app-blueprint-license'](
  route.mount({
    routes: {
      '/?': route => app.blueprints.design.license.edit(route, blueprint),
      '/delete': route => app.blueprints.design.license.delete(route, blueprint),
    }
  })
)
