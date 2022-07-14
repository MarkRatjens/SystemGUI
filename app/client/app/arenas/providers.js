app.arenas.providers = (route, arena) => {

  let runtime = arena.role_providers && arena.role_providers.find(
    (role_provider) => role_provider.role_identifier == 'runtime'
  )

  let components

  if (runtime) {
    components = [
      a.small('Runtime'), ` ${app.providers.types.labelFor(runtime.provider_identifier)}`,
      app.arenas.providers.show(route, arena),
      a.hr,
      app.arenas.show.sink(route, arena, state, resolutions),
    ]
  } else {
    components = [
      a['div.m-1'](
        'Setup arena for',
      ),
      app.button({
        label: app.icon('fas fa-hammer', 'Building'),
        title: 'Building packages',
        onclick: () => route.open('building'),
      }), ' ',
      app.button({
        label: app.icon('fas fa-magic', 'Orchestration'),
        title: 'Orchestration of systems',
        onclick: () => route.open('orchestratation'),
      }),
    ]
  }

  return a['app-arenas-providers'](components)
}
