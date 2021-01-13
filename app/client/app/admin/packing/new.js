app.admin.packing.new = (router) => (a, x) => [
  a.h1('New pack with Post'),
  app.http({
    url: '/api/resolutions',
    success: (resolutions, el) => {
      el.$nodes = [app.form({
        url: '/api/packing',
        scope: 'pack',
        form: (f) => [
          f.field({
            key: 'identifier',
            required: true,
            label: false,
            as: 'select',
            placeholder: 'Select resolution',
            selections: resolutions,
          }),
          f.buttons({router: router}),
        ],
        success: (pack) => router.open(`../${pack.identifier}`),
      })]
    }
  }),
  a.h1('New pack with Redirect'),
  app.http({
    url: '/api/resolutions',
    success: (resolutions, el) => {
      el.$nodes = [app.form({
        form: (f) => [
          f.field({
            key: 'identifier',
            required: true,
            label: false,
            as: 'select',
            placeholder: 'Select resolution',
            selections: resolutions,
          }),
          f.buttons({router: router}),
        ],
        action: (submission) => {
          let pack = submission.form.$value()
          router.open(`../${pack.identifier}`)
        },
      })]
    }
  }),

];
