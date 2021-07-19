app.admin.blueprints.specification.systemPackages.preview = (route, specification) => (a,x) =>
specification.system_packages && (specification.system_packages.adds || specification.system_packages.removes) ?
a.div([
  'System packages',
  x.out(specification.system_packages),
  // a.ul([
  //   specification.system_packages.adds ? a.li([
  //     `add - ${specification.system_packages.adds.join(', ')}`,
  //   ]) : a._,
  //   specification.system_packages.removes ? a.li([
  //     `remove - ${specification.system_packages.removes.join(', ')}`,
  //   ]) : a._,
  // ]),
]) : a._
