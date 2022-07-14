app.blueprints.design.blueprint.bundledPackages.preview = (route, blueprint) => 
blueprint.bundled_packages ? app.navBox(
  route,
  [
    'Bundled packages',
    x.out(blueprint.bundled_packages),
  ],
  'bundled_packages',
) : ''
