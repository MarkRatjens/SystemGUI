app.admin.packs = (route) => (a, x) => a.div([
  route.mount({
    routes: {
      '/?': app.admin.packs.index,
      // '/~new': app.admin.packs.new,
      '/:resolutionIdentifier*': app.admin.packs.pack,
    }
  }),
]);
