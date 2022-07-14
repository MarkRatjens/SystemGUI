app.arenas.show.providers = (route, arena) => {

  if (arena.role_providers.length) {

    let providerFor = (role) => (arena.role_providers.find(
      (role_provider) => role_provider.role_identifier == role
    ) || {}).provider_identifier

    let runtime = providerFor('runtime')
    let packing = providerFor('packing')
    let orchestration = providerFor('orchestration')

    return a.div([
      a.small('Runtime'), ` ${app.providers.types.labelFor(runtime)}`,
      a.small('Packing'), ` ${app.providers.types.labelFor(packing)}`,
      orchestration ? a.span([a.small('Orchestration'), ` ${app.providers.types.labelFor(orchestration)}`]) : null,
    ])
  } else {
    route.open('providers')
    return app.spinner('Loading providers')
  }

}
