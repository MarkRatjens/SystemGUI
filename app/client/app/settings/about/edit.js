app.settings.about.edit = (route) => a.div([
  app.close(route),
  a['h5.py-2']("About"),
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
            ]
          }),
          f.field({
            key: 'colors',
            as: 'one',
            form: (ff) => [
              ff.row({
                columns: [
                  ff.field({
                    key: 'text',
                    type: 'color',
                    value: '#333333',
                  }),
                  ff.field({
                    key: 'background',
                    type: 'color',
                    value: '#CCCCCC',
                  }),
                ]
              })
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
