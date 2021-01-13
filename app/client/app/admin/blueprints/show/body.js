app.admin.blueprints.show.body = (router, blueprint) => (a,x) => [

  router.mount({
    routes: {
      '/?': router => app.admin.blueprints.show.home(router, blueprint),
      '/title/?': router => app.admin.blueprints.title(router, blueprint),
      '/description/?': router => app.admin.blueprints.description(router, blueprint),
      '/licenses/?': router => app.admin.blueprints.licenses(router, blueprint),
      '/configuration/?': router => app.admin.blueprints.configuration(router, blueprint),
      '/packages/?': router => app.admin.blueprints.packages(router, blueprint),
      '/repositories/?': router => app.admin.blueprints.repositories(router, blueprint),
      '/system_packages*': router => app.admin.blueprints.system_packages(router, blueprint),
      '/other_packages*': router => app.admin.blueprints.other_packages(router, blueprint),
      '/packing*': router => app.admin.blueprints.packing(router, blueprint),
      '/permissions*': router => app.admin.blueprints.permissions(router, blueprint),
      '/modules/?': router => app.admin.blueprints.modules(router, blueprint),
      '/binding_anchor*': router => app.admin.blueprints.binding_anchor(router, blueprint),
      '/bindings*': router => app.admin.blueprints.bindings(router, blueprint),
      '/images*': router => app.admin.blueprints.images(router, blueprint),
      '/containers*': router => app.admin.blueprints.containers(router, blueprint),
      '/json*': router => blueprint,
      '/:unrecognised': router => a['.error'](`Unrecognised division '${router.params.unrecognised}'`),
    },
    transition: ['fade', {duration: 100}],
  }),
]
