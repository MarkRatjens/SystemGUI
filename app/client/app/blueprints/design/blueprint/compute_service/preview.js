app.blueprints.design.blueprint.compute_service.preview = (route, blueprint) =>
blueprint.compute_service ? app.navBox(
  route,
  [
    'Compute service',
    x.out(blueprint.compute_service),
  ],
  'compute_service',
) : ''
