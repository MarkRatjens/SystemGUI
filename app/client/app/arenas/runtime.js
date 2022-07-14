app.arenas.runtime = (route) => a['app-arenas-runtime-new']([
  a.h3('Arena runtime'),
  app.jsonForm({
    url: `/api/arenas/@${route.params.arenaIdentifier}/provide`,
    route: route,
    method: 'POST',
    form: f => [
      f.field({
        key: 'role_identifier',
        as: 'hidden',
        value: 'runtime',
      }),
      f.field({
        key: 'provider_identifier',
        as: 'select',
        placeholder: 'Select runtime',
        required: true,
        selections: {
          docker: 'Docker'
        },
      }),
    ],
    close: '../..',
    success: () => {
      route.reload()
    },
  })
])
