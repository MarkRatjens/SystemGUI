app.admin.resolutions.new = (router) => (a, x) => a.div([
  a.h1('New resolution'),
  app.fetch({
    url: [
      '/api/arenas',
      '/api/blueprints',
    ],
    success: ([arenas, blueprints], el) => {
      el.$nodes = [app.form({
        url: '/api/resolutions',
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
            key: 'blueprint_identifier',
            required: true,
            label: false,
            as: 'select',
            placeholder: 'Select blueprint',
            selections: blueprints,
          }),
          f.buttons({router: router}),
        ],
        success: (resolution_identifier) => router.open(`../${resolution_identifier}`),
      })]
    }
  }),
]);
