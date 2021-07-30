app.blueprints.design.blueprint.about.preview = (route, blueprint) => (a,x) =>
blueprint.about ? app.navBox(
  route,
  [
    'About',
    x.out(blueprint.about),
  ],
  'about'
) : null
