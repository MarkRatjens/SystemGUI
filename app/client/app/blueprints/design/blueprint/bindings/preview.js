app.blueprints.design.blueprint.bindings.preview = (route, blueprint) => (a,x) =>
blueprint.bindings ? app.navBox(
  route,
  [
    'Bindings',
    x.out(blueprint.bindings),
    // a.ul(
    //   blueprint.bindings.map(binding => a.li([
    //     app.bindingLabel(binding),
    //   ]))
    // ),
  ],
  'bindings'
) : null
