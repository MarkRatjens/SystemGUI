app.blueprints.design.blueprint.otherPackages.preview = (route, blueprint) => (a,x) =>
blueprint.other_packages ? app.navBox(
  route,
  [
    'Other packages',
    x.out(blueprint.other_packages),
  ],
  'other_packages',
) : null
