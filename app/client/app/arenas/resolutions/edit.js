app.arenas.resolutions.edit = (route) => a['app-arenas-resolutions-edit']([
  app.fetch({
    url: [
      `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/summary`,
      `/api/blueprints/@${route.params.blueprintIdentifier}/form`,
    ],
    success: ([resolution, summary, form]) => a.div([
      app.jsonForm({
        url: `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
        object: {resolution: JSON.stringify(resolution, null, 2)},
        route: route,
        form: f => [
          f.field({
            key: 'resolution',
            as: 'code',
            label: false,
            control: {
              mode: 'javascript',
              keymap: window.localStorage.editorKeymap,
            },
            fieldTag: {
              $on: {
                keyup: (e) => {
                  let el = e.currentTarget
                  let validationEl = el.$('^form app-json-validation')
                  try {
                    JSON.parse(el.$('ax-appkit-form-control').$value())
                    validationEl.$('.error').$nodes = []
                    validationEl.$('textarea').setCustomValidity('')
                  } catch {
                    validationEl.$('.error').$nodes = app.icon('fas fa-exclamation-triangle', 'Invalid JSON')
                    validationEl.$('textarea').setCustomValidity('Invalid JSON')
                  }
                }
              }
            },
          }),
          a['app-json-validation']([
            a.textarea({
              style: {
                border: 0,
                width: 0,
                height: 0,
                resize: 'none',
                padding: 0,
                display: 'block',
              }
            }),
            a['.error']
          ]),
        ],
        digest: (form) => {
          return {model: JSON.parse(form.resolution)}
        },
        success: () => {
          route.open('..')
        },
      }),
    ])
  }),
])
