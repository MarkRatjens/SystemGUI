app.blueprints.show.body = (router, blueprint) => (a,x) => [

  router.mount({
    routes: {
      '/?': router => app.blueprints.show.home(router, blueprint),
      '/title/?': router => app.blueprints.title(router, blueprint),
      '/description/?': router => app.blueprints.description(router, blueprint),
      '/licenses/?': router => app.blueprints.licenses(router, blueprint),
      '/packages/?': router => app.blueprints.packages(router, blueprint),
      '/repositories/?': router => app.blueprints.repositories(router, blueprint),
      '/os_packages*': router => app.blueprints.os_packages(router, blueprint),
      '/modules/?': router => app.blueprints.modules(router, blueprint),
      '/binding_anchor*': router => app.blueprints.binding_anchor(router, blueprint),
      '/bindings*': router => app.blueprints.bindings(router, blueprint),
      '/images*': router => app.blueprints.images(router, blueprint),
      '/containers*': router => app.blueprints.containers(router, blueprint),
      '/json*': router => blueprint,
      '/:unrecognised': router => a['.error'](`Unrecognised division '${router.params.unrecognised}'`),
    },
    transition: ['fade', {duration: 100}],
  }),
]
