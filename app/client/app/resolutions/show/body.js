app.resolutions.show.body = (router, resolution) => (a,x) => [

  router.mount({
    routes: {
      '/?': router => app.resolutions.show.home(router, resolution),
      '/domain*': router => app.resolutions.domain(router, resolution),
      '/bindings*': router => app.resolutions.bindings(router, resolution),
      '/json*': router => resolution,
    },
    transition: ['fade', {duration: 100}],
  }),
]
