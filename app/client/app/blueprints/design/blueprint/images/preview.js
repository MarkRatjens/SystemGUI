app.blueprints.design.blueprint.images.preview = (route, blueprint) => 
blueprint.images ? app.navBox(
  route,
  [
    'Images',
    x.out(blueprint.images),
  ],
  'images',
) : ''
