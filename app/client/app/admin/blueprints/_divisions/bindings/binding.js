app.admin.blueprints.bindings.binding = (router, blueprint) => (a, x) => [
  `Binding ${Number(router.params.binding_id) + 1}`,
  router.mount({
    routes: {
      '/?': (router) => app.admin.blueprints.bindings.binding.show(router, blueprint),
      '/identifier': (router) => app.admin.blueprints.bindings.binding.identifier(router, blueprint),
      '/type': (router) => app.admin.blueprints.bindings.binding.type(router, blueprint),
      '/descriptor': (router) => app.admin.blueprints.bindings.binding.descriptor(router, blueprint),
      '/configuration': (router) => app.admin.blueprints.bindings.binding.configuration(router, blueprint),
    }
  }),
];
