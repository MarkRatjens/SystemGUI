app.blueprints.design.blueprint.systemPackages.preview = (route, blueprint) => 
blueprint.system_packages ? app.navBox(
  route,
  [
    'System packages',
    x.out(blueprint.system_packages),
  ],
  'system_packages',
) : ''
