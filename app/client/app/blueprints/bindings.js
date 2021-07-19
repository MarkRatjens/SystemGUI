app.blueprints.bindings = (blueprint, specification) => (route) => (a, x) => [
  a['div.mt-1'](app.blueprints.bindings.menu(route)),
  route.mount({
    routes: {
      '/?': app.blueprints.chart(route, route.params.blueprintIdentifier, specification.bindings),
      '/resolved/?': app.blueprints.chart(route, route.params.blueprintIdentifier, blueprint.relations.blueprints.bindings),
    }
  }),
]
