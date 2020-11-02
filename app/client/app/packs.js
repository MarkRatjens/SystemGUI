app.packs = (router) => (a, x) => [
  router.mount({
    routes: {
      '/?': app.packs.index,
      '/~new': app.packs.new,
      '/:pack_id*': app.packs.pack,
    }
  }),
];
