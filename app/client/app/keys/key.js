app.keys.key = (route) => (a, x) => a.div([
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
      '/?': app.keys.show,
      '/edit': app.keys.edit,
      '/token': app.keys.token,
      '/delete': app.keys.delete,
    },
  }),
]);
