app.arenas.show.runtime = (route, arena, state, resolutions) => {

  let runtime = arena.role_providers && arena.role_providers.find(
    (role_provider) => role_provider.role_identifier == 'runtime'
  )

  if (runtime) {
    return a.div([
      a.small('Runtime'), ` ${app.providers.types.labelFor(runtime.provider_identifier)}`,
      app.arenas.show.orchestration(route, arena, state, resolutions, runtime),
      a.hr,
      app.arenas.show.sink(route, arena, state, resolutions),
    ])
  } else {
    route.open('runtime')
    return app.spinner('Loading runtime')
  }

}
