app.blueprints.bindings.binding = (router, blueprint) => (a, x) => [
  `Binding ${Number(router.params.binding_id) + 1}`,
  router.mount({
    routes: {
      '/?': (router) => app.blueprints.bindings.binding.show(router, blueprint),
      '/identifier': (router) => app.blueprints.bindings.binding.identifier(router, blueprint),
      '/descriptor': (router) => app.blueprints.bindings.binding.descriptor(router, blueprint),
      '/variables': (router) => app.blueprints.bindings.binding.variables(router, blueprint),
    }
  }),
];
