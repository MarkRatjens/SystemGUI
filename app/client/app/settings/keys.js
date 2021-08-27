app.settings.keys = (route) => (a, x) => a.div([
  a.h3('Keys'),
  route.mount({
    routes: {
      '/?': app.settings.keys.index,
      '/new': app.settings.keys.new,
      '/@:keyIdentifier/?*': app.settings.keys.key,
    },
  }),
]);
