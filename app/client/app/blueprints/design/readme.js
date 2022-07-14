app.blueprints.design.readme = (route) => a['#app-blueprint-readme'](
  route.mount({
    routes: {
      '/?': route => app.blueprints.design.readme.show(route),
      '/edit': route => app.blueprints.design.readme.edit(route),
      '/delete': route => app.blueprints.design.readme.delete(route),
    }
  })
)
