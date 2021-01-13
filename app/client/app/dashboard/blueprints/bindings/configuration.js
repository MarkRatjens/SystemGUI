app.dashboard.blueprints.bindings.configuration = (router, resolution, binding, targetBlueprint) => (a, x) => {

  let routes = {}
  routes[`/bindings/${targetBlueprint.identifier}`] =
    (router) => app.dashboard.blueprints.bindings.configuration.edit(router, resolution, binding, targetBlueprint);
  routes['*'] = (router) => app.dashboard.blueprints.bindings.configuration.show(router, resolution, binding, targetBlueprint);

  return binding.configuration ? [
    router.mount({
      routes: routes,
      lazy: true,
    }),
  ] : null;

}
