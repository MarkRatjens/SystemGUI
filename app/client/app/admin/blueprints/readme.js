app.admin.blueprints.readme = (route) => (a, x) => a['#app-blueprint-readme'](
  route.mount({
    routes: {
      '/?': route => app.admin.blueprints.readme.edit(route),
      '/delete': route => app.admin.blueprints.readme.delete(route),
    }
  })
)
