app.admin.blueprints.show.home = (router, blueprint) => (a,x) => a['div.row']([

  a['div.col']([
    'title',
    'description',
    'licenses',
    'configuration',
    'binding_anchor',
    'bindings',
    'system_packages',
    'other_packages',
    'packing',
    'permissions',
    'modules',
    'images',
    'containers',
  ].map(
    (division) => app.admin.blueprints.show.division(router, blueprint, division)
  )),

])
