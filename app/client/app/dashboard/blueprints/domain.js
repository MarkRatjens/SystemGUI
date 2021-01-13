app.dashboard.blueprints.domain = (router, resolution) => (a, x) =>
resolution.domain ? [
  router.mount({
    routes: {
      '/domain': (router) => app.dashboard.blueprints.domain.edit(router, resolution),
      '*': (router) => app.dashboard.blueprints.domain.show(router, resolution),
    },
    lazy: true,
  }),
] : null;
