app.blueprints.bindings = (blueprint, relations) => (route) => (a, x) => [
  a['div.mt-1'](app.blueprints.bindings.menu(route)),
  route.mount({
    routes: {
      '/?': app.blueprints.chart(route, route.params.blueprintIdentifier, blueprint.bindings),
      '/resolved/?': app.blueprints.chart(route, route.params.blueprintIdentifier, relations.blueprints.bindings),
    }
  }),
]
