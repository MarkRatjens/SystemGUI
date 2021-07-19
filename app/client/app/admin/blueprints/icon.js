app.admin.blueprints.icon = (route) => (a, x) => a['#app-blueprint-icon'](
  route.mount({
    routes: {
      '/?': route => app.admin.blueprints.icon.edit(route),
      '/delete': route => app.admin.blueprints.icon.delete(route),
      // '/?': route => app.admin.blueprints.icon.preview(route),
      // '*': null,
    }
  })
)
