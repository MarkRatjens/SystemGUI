app.blueprints.design.specification = (route) => (a, x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/specification`,
    placeholder: app.spinner('Loading blueprint specification'),
    success: (specification, el) => [
      a['div.row']([
        a['div.col-3']([
          app.blueprints.design.specification.menu(route, specification),
        ]),
        a['div.col-9']([
          app.blueprints.design.specification.body(route, specification),
        ]),
      ]),
    ],
  }),
]
