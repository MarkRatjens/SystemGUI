app.dashboard.blueprints.provisioning.add = (router, arena) => (a, x) => [

  app.http({
    url: '/api/arenas',
    placeholder: app.spinner('Loading arenas'),
    success: (arenas, el) => el.$nodes = [
      app.form({
        url: '/api/provisioning',
        scope: 'provisions',
        form: (f) => [
          f.field({
            key: 'arena_identifier',
            label: false,
            as: 'select',
            selections: arenas,
          }),
          f.field({
            key: 'resolution_identifier',
            as: 'hidden',
            value: router.params.blueprint_id,
          }),
          f.buttons({router: router})
        ],
        success: () => router.open('..'),
      }),
    ]
  }),

]
