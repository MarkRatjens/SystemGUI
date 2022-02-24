app.blueprints.design.blueprint.bindingTarget.preview = (route, blueprint) => 
blueprint.binding_target ? app.navBox(
  route,
  [
    'Binding target',
    x.out(blueprint.binding_target),
  ],
  'binding_target',
) : ''
