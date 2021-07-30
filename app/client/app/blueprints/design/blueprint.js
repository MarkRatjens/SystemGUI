app.blueprints.design.blueprint = (route) => (a, x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}`,
    placeholder: app.spinner('Loading blueprint'),
    success: (blueprint, el) => [
      a['div.row']([
        a['div.col-3']([
          app.blueprints.design.blueprint.menu(route, blueprint),
        ]),
        a['div.col-9']([
          app.blueprints.design.blueprint.body(route, blueprint),
        ]),
      ]),
    ],
  }),
]
