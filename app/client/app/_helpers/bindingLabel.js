app.bindingLabel = (binding) => a.span([
  (binding.identifier && binding.identifier != binding.target_identifier) ?
  `${binding.target_identifier}::${binding.identifier}` : binding.target_identifier,
  binding.type ? a.small(` ${binding.type}`) : ''
])
