app.blueprints.design.icon = (route) => (a, x) => a['#app-blueprint-icon'](
  route.mount({
    routes: {
      '/?': route => app.blueprints.design.icon.edit(route),
      '/delete': route => app.blueprints.design.icon.delete(route),
    }
  })
)
