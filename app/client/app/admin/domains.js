app.admin.domains = (route) => (a, x) => route.mount({
  routes: {
    '/?': app.admin.domains.index,
    '/~new': app.admin.domains.new,
    '/:domain_id/?': app.admin.domains.show,
    '/:domain_id/delete': app.admin.domains.delete,
    '/:domain_id/default': app.admin.domains.default,
  }
});
