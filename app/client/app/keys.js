app.keys = (route) => (a, x) => a.div([
  a.h3('Keys'),
  route.mount({
    routes: {
      '/?': app.keys.index,
      '/new': app.keys.new,
      '/@:keyIdentifier/?*': app.keys.key,
    },
  }),
]);
