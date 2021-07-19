app.blueprints.design.specification.configuration.preview = (route, specification) => (a,x) =>
specification.configuration ? app.navBox(
  route,
  [
    'Configuration',
    x.out(specification.configuration),
  ],
  'configuration',
) : null
