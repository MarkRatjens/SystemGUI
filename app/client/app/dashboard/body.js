app.dashboard.body = (route) => (a,x) => [
  app.fetch({
    url: '/api/settings',
    success: (settings) => [
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
    ],
  }),
]
