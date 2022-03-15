app.blueprints.relations = (route) => a.div([
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/relations`,
    placeholder: app.spinner(`Loading ${route.params.blueprintIdentifier}`),
    success: (relations) => a.div([
      app.blueprints.chart(route, relations),
    ]),
  }),
])
