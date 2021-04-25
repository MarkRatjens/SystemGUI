app.admin.blueprints.bindings.preview = (router, blueprint) => (a,x) =>
blueprint.bindings ?
a.div([
  'Bindings',
  a.ul(
    blueprint.bindings.map(binding => a.li([
      binding.identifier,
      ' ',
      binding.identifier != binding.target_identifier ? binding.target_identifier : a._,
      ' ',
      binding.type == 'embed' ? a.small('embed') : a._,
    ]))
  ),
]) : a._
