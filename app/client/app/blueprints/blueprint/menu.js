app.blueprints.blueprint.menu = (route) => a['app-menu']([
  app.fetch({
    url: '/api/blueprints/list',
    placeholder: a['div.p-2'](app.spinner("Loading blueprints")),
    success: (blueprints =>
      a['app-menu-buttons'](blueprints.sort().map(
        identifier => a.div(
          app.blueprints.blueprint.menu.blueprint(route, identifier)
        ),
      ))
    ),
  }),
])
