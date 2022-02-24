app.blueprints.design.blueprint.about.preview = (route, blueprint) => 
blueprint.about ? app.navBox(
  route,
  [
    'About',
    x.out(blueprint.about),
  ],
  'about'
) : ''
