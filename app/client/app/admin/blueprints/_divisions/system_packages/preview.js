app.admin.blueprints.system_packages.preview = (router, blueprint) => (a,x) =>
blueprint.system_packages && (blueprint.system_packages.adds || blueprint.system_packages.removes) ?
a.div([
  'System packages',
  x.out(blueprint.system_packages),
  // a.ul([
  //   blueprint.system_packages.adds ? a.li([
  //     `add - ${blueprint.system_packages.adds.join(', ')}`,
  //   ]) : a._,
  //   blueprint.system_packages.removes ? a.li([
  //     `remove - ${blueprint.system_packages.removes.join(', ')}`,
  //   ]) : a._,
  // ]),
]) : a._
