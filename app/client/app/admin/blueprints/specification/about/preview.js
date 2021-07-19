app.admin.blueprints.specification.about.preview = (route, specification) => (a,x) =>
specification.about ? app.navBox(
  route,
  [
    'About',
    x.out(specification.about),
  ],
  'about'
) : null
