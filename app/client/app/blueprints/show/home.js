app.blueprints.show.home = (router, blueprint) => (a,x) => a['div.row']([

  a['div.col']([
    'title',
    'description',
    'licenses',
    'os_packages',
    'binding_anchor',
    'bindings',
    'images',
    'containers',
  ].map(
    (division) => app.blueprints.show.division(router, blueprint, division)
  )),

])
