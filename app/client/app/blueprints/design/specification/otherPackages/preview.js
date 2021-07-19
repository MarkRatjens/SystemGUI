app.blueprints.design.specification.otherPackages.preview = (route, specification) => (a,x) =>
specification.other_packages ? app.navBox(
  route,
  [
    'Other packages',
    x.out(specification.other_packages),
  ],
  'other_packages',
) : null
