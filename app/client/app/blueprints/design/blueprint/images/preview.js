app.blueprints.design.blueprint.images.preview = (route, blueprint) => (a,x) =>
blueprint.images ? app.navBox(
  route,
  [
    'Images',
    x.out(blueprint.images),
  ],
  'images',
) : null
