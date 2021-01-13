app.admin.provisioning = (router) => (a, x) => [
  router.mount({
    routes: {
      '/?': app.admin.provisioning.index,
      '/~new': app.admin.provisioning.new,
      '/:arena_id/:resolution_id*': app.admin.provisioning.provisions,
    }
  }),
];
