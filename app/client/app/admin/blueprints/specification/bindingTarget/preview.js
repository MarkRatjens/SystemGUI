app.admin.blueprints.specification.bindingTarget.preview = (route, specification) => (a,x) =>
specification.binding_target ? app.navBox(
  route,
  [
    'Binding target',
    x.out(specification.binding_target),
  ],
  'binding_target',
) : null
