app.domains = (router) => (a, x) => [
  router.mount({
    routes: {
      '/?': app.domains.index,
      '/~new': app.domains.new,
      '/:domain_id/?': app.domains.show,
      '/:domain_id/delete': app.domains.delete,
      '/:domain_id/default': app.domains.default,
    }
  }),
];
