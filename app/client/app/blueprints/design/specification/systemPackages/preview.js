app.blueprints.design.specification.systemPackages.preview = (route, specification) => (a,x) =>
specification.system_packages ? app.navBox(
  route,
  [
    'System packages',
    x.out(specification.system_packages),
  ],
  'system_packages',
) : null
