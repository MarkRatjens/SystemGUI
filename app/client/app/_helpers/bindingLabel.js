app.bindingLabel = (binding) =>
(binding.identifier && binding.identifier != binding.target_identifier) ?
`${binding.target_identifier} (${binding.identifier})` : binding.target_identifier
