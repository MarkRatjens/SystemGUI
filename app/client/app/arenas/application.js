app.arenas.application = (route) => (a,x) => [
  app.fetch({
    url: `/api/applications/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
    success: (application) => [
      application.blueprint.exist ? [
        app.arenas.application.blueprint(route, application),
        route.mount({
          routes: {
            '/?': app.arenas.application.show(application),
            '/installation/?': app.arenas.application.installation(application),
          }
        }),
      ] :
      a['div.error.my-2.mx-4'](app.icon('fas fa-exclamation-circle', 'Missing blueprint')),
    ],
  }),
]
