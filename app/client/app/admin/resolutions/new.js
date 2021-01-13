app.admin.resolutions.new = (router) => (a, x) => [
  a.h1('New resolution with Post'),
  app.http({
    url: '/api/blueprints',
    success: (blueprints, el) => {
      el.$nodes = [app.form({
        url: '/api/resolutions',
        scope: 'resolution',
        form: (f) => [
          f.field({
            key: 'identifier',
            required: true,
            label: false,
            as: 'select',
            placeholder: 'Select blueprint',
            selections: blueprints,
          }),
          f.buttons({router: router}),
        ],
        success: (resolution) => router.open(`../${resolution.identifier}`),
      })]
    }
  }),
  a.h1('New resolution with Redirect'),
  app.http({
    url: '/api/blueprints',
    success: (blueprints, el) => {
      el.$nodes = [app.form({
        form: (f) => [
          f.field({
            key: 'identifier',
            required: true,
            label: false,
            as: 'select',
            placeholder: 'Select blueprint',
            selections: blueprints,
          }),
          f.buttons({router: router}),
        ],
        action: (submission) => {
          let resolution = submission.form.$value()
          router.open(`../${resolution.identifier}`)
        },
      })]
    }
  }),

];
