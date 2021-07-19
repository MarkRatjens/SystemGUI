app.blueprints.design.specification.provider.preview = (route, specification) => (a,x) =>
specification.provider ? app.navBox(
  route,
  [
    'Provider',
    x.out(specification.provider),
  ],
  'provider',
) : null
