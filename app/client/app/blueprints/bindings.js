app.blueprints.bindings = (blueprint) => (route) => (a, x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/relations`,
    placeholder: app.spinner(`Loading ${route.params.blueprintIdentifier}`),
    success: (relations) => [
      a['div.mt-1'](app.blueprints.bindings.menu(route)),
      route.mount({
        routes: {
          '/?': app.blueprints.chart(route, route.params.blueprintIdentifier, blueprint.bindings),
          '/resolved/?': app.blueprints.chart(route, route.params.blueprintIdentifier, relations.blueprints.bindings),
        }
      }),
    ]
  }),
]
