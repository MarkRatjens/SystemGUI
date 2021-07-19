app.blueprints.design.specification.modules.preview = (route, specification) => (a,x) =>
specification.modules ? app.navBox(
  route,
  [
    'Modules',
    x.out(specification.modules),
  ],
  'modules',
) : null
