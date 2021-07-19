app.blueprints.design.specification.bindings.preview = (route, specification) => (a,x) =>
specification.bindings ? app.navBox(
  route,
  [
    'Bindings',
    x.out(specification.bindings),
    // a.ul(
    //   specification.bindings.map(binding => a.li([
    //     app.bindingLabel(binding),
    //   ]))
    // ),
  ],
  'bindings'
) : null
