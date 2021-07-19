app.admin.blueprints.specification.images.preview = (route, specification) => (a,x) =>
specification.images ? app.navBox(
  route,
  [
    'Images',
    x.out(specification.images),
  ],
  'images',
) : null
