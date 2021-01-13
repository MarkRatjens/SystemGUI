app.admin.provisioning.new = (router) => (a, x) => [
  a.h1('New provisions with Post'),
  app.http({
    url: [
      '/api/arenas',
      '/api/resolutions',
    ],
    success: ([arenas, resolutions], el) => {
      el.$nodes = [app.form({
        url: '/api/provisioning',
        scope: 'provisions',
        form: (f) => [
          f.field({
            key: 'arena_identifier',
            required: true,
            label: false,
            as: 'select',
            placeholder: 'Select arena',
            selections: arenas,
          }),
          f.field({
            key: 'resolution_identifier',
            required: true,
            label: false,
            as: 'select',
            placeholder: 'Select resolution',
            selections: resolutions,
          }),
          f.buttons({router: router}),
        ],
        success: (provisions) => {
          router.open(`../${provisions.arena_identifier}/${provisions.resolution_identifier}`)
        },
      })]
    }
  }),
  a.h1('New provisions with Redirect'),
  app.http({
    url: [
      '/api/arenas',
      '/api/resolutions',
    ],
    success: ([arenas, resolutions], el) => {
      el.$nodes = [app.form({
        form: (f) => [
          f.field({
            key: 'arena_identifier',
            required: true,
            label: false,
            as: 'select',
            placeholder: 'Select arena',
            selections: arenas,
          }),
          f.field({
            key: 'resolution_identifier',
            required: true,
            label: false,
            as: 'select',
            placeholder: 'Select resolution',
            selections: resolutions,
          }),
          f.buttons({router: router}),
        ],
        action: (submission) => {
          let provisions = submission.form.$value()
          router.open(`../${provisions.arena_identifier}/${provisions.resolution_identifier}`)
        },
      })]
    }
  }),

];
