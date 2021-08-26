app.settings.keys.key = (route, blueprint) => (a, x) => a.div([
  route.mount({
    routes: {
      '/edit': null,
      '*': () => [
        app.fetch({
          url: `/api/keys/@${route.params.keyIdentifier}`,
          success: token => [
            a.h5(token.identifier),
            a.p(token.explanation || app.placeholder('No explanation')),
          ]
        }),
      ],
    },
  }),
  route.mount({
    routes: {
      '/?': app.settings.keys.show,
      '/edit': app.settings.keys.edit,
      '/token': app.settings.keys.token,
      '/delete': app.settings.keys.delete,
    },
  }),
]);
