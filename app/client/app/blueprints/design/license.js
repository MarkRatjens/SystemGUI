app.blueprints.design.license = (route, blueprint) => a['#app-blueprint-license'](
  route.mount({
    routes: {
      '/?': route => app.blueprints.design.license.show(route),
      '/edit': route => app.blueprints.design.license.edit(route),
      '/delete': route => app.blueprints.design.license.delete(route, blueprint),
    }
  })
)
