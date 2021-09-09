app.user_keys = (route) => (a, x) => a.div([
  a.h1('User keys'),
  route.mount({
    routes: {
      '/?': app.user_keys.index,
      '/new': app.user_keys.new,
      '/@:userKeyIdentifier/?*': app.user_keys.key,
    },
  }),
]);
