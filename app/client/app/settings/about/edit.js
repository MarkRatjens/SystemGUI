app.settings.about.edit = (route) => a.div([
  app.close(route),
  a.h5("About"),
  a.hr,
  app.fetch({
    url: '/api/settings',
    placeholder: app.spinner('Loading settings'),
    success: (settings, el) => a.div([
      app.jsonForm({
        url: '/api/settings',
        method: 'POST',
        route: route,
        object: {
          editor_keymap: window.localStorage.editorKeymap,
          ...settings,
        },
        horizontal: true,
        form: (f) => [
          f.field({
            key: 'about',
            as: 'one',
            horizontal: false,
            label: false,
            form: (ff) => [
              ff.field({
                key: 'label',
              }),
              ff.field({
                key: 'explanation',
              }),
              ff.field({
                key: 'color',
                as: 'one',
                form: (fff) => [
                  fff.row({
                    columns: [
                      fff.field({
                        key: 'text',
                        type: 'color',
                        value: '#333333',
                      }),
                      fff.field({
                        key: 'background',
                        type: 'color',
                        value: '#CCCCCC',
                      }),
                    ]
                  })
                ]
              }),
            ]
          }),
        ],
        digest: (form) => {
          return {model: form}
        },
        success: () => {
          route.load('reload')
        }
      }),
    ]),
  }),
])
