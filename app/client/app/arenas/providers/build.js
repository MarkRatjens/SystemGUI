app.arenas.providers.build = (route) => a['app-arenas-providers-build']([
  a.h3('Build providers'),
  app.jsonForm({
    url: `/api/arenas/@${route.params.arenaIdentifier}`,
    route: route,
    method: 'POST',
    // scope: 'model',
    form: f => [
      f.field({
        key: 'purpose',
        label: false,
        as: 'radios',
        selections: {
          build: "Build",
          orchestrate: "Orchestrate"
        }
      }),
      // f.field({
      //   key: 'role_identifier',
      //   as: 'hidden',
      //   value: 'runtime',
      // }),
      // f.field({
      //   key: 'provider_identifier',
      //   as: 'select',
      //   placeholder: 'Select providers',
      //   required: true,
      //   selections: {
      //     docker: 'Docker'
      //   },
      // }),
    ],
    close: '../..',
    digest: form => {
      debugger
    },
    success: () => {
      route.reload()
    },
  })
])
