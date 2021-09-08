app.user_keys.key = (route) => (a, x) => a.div([
  route.mount({
    routes: {
      '/edit': null,
      '*': () => [
        app.fetch({
          url: `/api/user_keys/@${route.params.userKeyIdentifier}`,
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
      '/?': app.user_keys.show,
      '/edit': app.user_keys.edit,
      '/token': app.user_keys.token,
      '/delete': app.user_keys.delete,
    },
  }),
]);
