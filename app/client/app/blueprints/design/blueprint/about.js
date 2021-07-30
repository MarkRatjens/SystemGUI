app.blueprints.design.blueprint.about = (route, blueprint) => (a, x) => a['#app-blueprint-about'](
  route.mount({
    routes: {
      '/about': route => app.blueprints.design.blueprint.about.edit(route, blueprint),
      '/?': route => app.blueprints.design.blueprint.about.preview(route, blueprint),
    }
  })
)
