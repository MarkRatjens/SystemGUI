app.admin.blueprints.license = (route, blueprint) => (a, x) => a['#app-blueprint-license'](
  route.mount({
    routes: {
      '/?': route => app.admin.blueprints.license.edit(route, blueprint),
      '/delete': route => app.admin.blueprints.license.delete(route, blueprint),
    }
  })
)
