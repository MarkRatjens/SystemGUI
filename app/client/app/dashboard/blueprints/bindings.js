app.dashboard.blueprints.bindings = (router, resolution) => (a, x) =>
resolution.bindings ?
[
  resolution.bindings.map(
    (binding) => app.dashboard.blueprints.bindings.show(router, resolution, binding)
  ),
  a.hr,
] : null;
