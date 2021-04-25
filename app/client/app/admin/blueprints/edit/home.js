app.admin.blueprints.edit.home = (router, blueprint) => (a,x) => a['div.row']([

  a['div.col']([
    'about',
    // 'title',
    // 'description',
    // 'licenses',
    'configuration',
    'binding_target',
    'bindings',
    'system_packages',
    'other_packages',
    // 'packing',
    'permissions',
    'provider',
    'modules',
    'images',
    // 'containers',
    'volumes',
  ].map(
    (division) => app.admin.blueprints.edit.division(router, blueprint, division)
  )),

])
