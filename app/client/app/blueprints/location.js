app.blueprints.location = (route) => a.div([
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/summary`,
    success: summary => a.div([
      app.float({
        left: [
          a['div.mt-2.mb-2'](app.locationLabel(summary.location)),
        ],
        right: [
          route.mount({
            routes: {
              '/?': (route) => app.blueprints.location.show(route, summary),
              '/design/?*': (route) => app.blueprints.location.design(route, summary),
              '*': '',
            }
          }),
        ],
      }),
    ])
  }),
])
