app.dashboard.body = (route) => a['app-dashboard']([
  app.fetch({
    url: '/api/settings',
    success: (settings) => {
      app.universe.settings = settings
      return a.div([
        app.universeLabel(settings.about || {}),
        a['div.p-1']([
          route.mount({
            routes: {
              '/?': app.dashboard.show,
              '/blueprints/?*': app.blueprints,
              '/arenas/?*': app.arenas,
            },
          }),
        ]),
      ])
    },
  }),
])
