app.admin.packs = (router) => (a, x) => a.div([
  router.mount({
    routes: {
      '/?': app.admin.packs.index,
      // '/~new': app.admin.packs.new,
      '/:resolution_id*': app.admin.packs.pack,
    }
  }),
]);
