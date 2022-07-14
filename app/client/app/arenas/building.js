app.arenas.building = (route) => a['app-arenas-providers-build']([
  a.h3('Building arena'),
  app.jsonForm({
    url: `/api/arenas/@${route.params.arenaIdentifier}`,
    route: route,
    method: 'POST',
    // scope: 'model',
    form: f => [
      f.field({
        key: 'runtime',
        label: false,
        as: 'select',
        selections: app.providers.types.selectionsFor('runtime'),
        placeholder: 'select runtime',
      }),
      f.field({
        key: 'packing',
        label: false,
        as: 'select',
        selections: app.providers.types.selectionsFor('packing'),
        placeholder: 'select runtime',
        dependent: {
          key: 'runtime',
          pattern: '.',
        }
      }),
    ],
    close: '..',
    digest: form => ({
      model: {
        providers: [
          {
            role_identifier: 'runtime',
            provider_identifier: form.runtime
          },
          {
            role_identifier: 'packing',
            provider_identifier: form.packing
          }
        ]
      }
    }),
    success: () => {
      route.open('..')
    },
  })
])
