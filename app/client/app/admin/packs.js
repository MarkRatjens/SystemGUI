app.admin.packs = (router) => (a, x) => a.div([
  router.mount({
    routes: {
      '/?': app.admin.packs.index,
      // '/~new': app.admin.packs.new,
      '/:resolutionIdentifier*': app.admin.packs.pack,
    }
  }),
]);
