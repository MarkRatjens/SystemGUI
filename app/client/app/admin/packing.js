app.admin.packing = (router) => (a, x) => [
  router.mount({
    routes: {
      '/?': app.admin.packing.index,
      '/~new': app.admin.packing.new,
      '/:pack_id*': app.admin.packing.pack,
    }
  }),
];
