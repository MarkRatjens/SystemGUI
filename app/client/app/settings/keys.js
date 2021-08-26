app.settings.keys = (route, blueprint) => (a, x) => a.div([
  a.h3('Keys'),
  route.mount({
    routes: {
      '/?': app.settings.keys.index,
      '/new': app.settings.keys.new,
      '/@:keyIdentifier/?*': app.settings.keys.key,
    },
  }),
]);
