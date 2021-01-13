app.admin.resolutions.show.body = (router, resolution) => (a,x) => [

  router.mount({
    routes: {
      '/?': router => app.admin.resolutions.show.home(router, resolution),
      '/domain*': router => app.admin.resolutions.domain(router, resolution),
      '/bindings*': router => app.admin.resolutions.bindings(router, resolution),
      '/json*': router => resolution,
    },
    transition: ['fade', {duration: 100}],
  }),
]
