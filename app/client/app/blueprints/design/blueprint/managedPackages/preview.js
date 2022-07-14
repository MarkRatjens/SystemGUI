app.blueprints.design.blueprint.managedPackages.preview = (route, blueprint) =>
blueprint.managed_packages ? app.navBox(
  route,
  [
    'Managed packages',
    x.out(blueprint.managed_packages),
  ],
  'managed_packages',
) : ''
