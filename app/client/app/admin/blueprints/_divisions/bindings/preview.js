app.admin.blueprints.bindings.preview = (router, blueprint) => (a,x) =>
blueprint.bindings ?
[
  'Bindings',
  a.ul(
    blueprint.bindings.map(binding => a.li([
      binding.identifier ? a.div(binding.identifier) : null,
      binding.descriptor ? a.div([
        binding.descriptor.repository || a['.error']('No repository'), ' ',
        binding.descriptor.branch ? binding.descriptor.branch : null, ' ',
        binding.descriptor.identifier || null,
      ]) : null,
      x.out(binding.variables, {placeholder: null}),
    ]))
  ),
] : null
