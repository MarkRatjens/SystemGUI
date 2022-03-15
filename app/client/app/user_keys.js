app.user_keys = (route) => a.div([
  route.mount({
    routes: {
      '/?': app.user_keys.index,
      '/new': app.user_keys.new,
      '/@:userKeyIdentifier/?*': app.user_keys.key,
    },
  }),
]);
