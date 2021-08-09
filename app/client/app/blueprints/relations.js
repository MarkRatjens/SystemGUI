app.blueprints.relations = (blueprint) => (route) => (a, x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/relations`,
    placeholder: app.spinner(`Loading ${route.params.blueprintIdentifier}`),
    xsuccess: (relations) => [
      a['div.mt-1'](app.blueprints.usage.menu(route)),
      route.mount({
        routes: {
          '/?': app.blueprints.chart(route, route.params.blueprintIdentifier, blueprint.usage),
          '/resolved/?': app.blueprints.chart(route, route.params.blueprintIdentifier, relations.blueprints.usage),
        }
      }),
    ]
  }),
]
