app.dashboard.body = (route) => (a,x) => [
  app.fetch({
    url: [
      '/api/settings',
    ],
    success: ([settings, domains, providers]) => {
      app.universe.settings = settings
      return [
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
      ]
    },
  }),
]
