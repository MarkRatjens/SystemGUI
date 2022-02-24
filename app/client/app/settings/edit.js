app.settings.edit = (route) => a.div([
  app.fetch({
    url: '/api/settings',
    placeholder: app.spinner('Loading settings'),
    success: (settings, el) => a.div([
      app.jsonForm({
        url: '/api/settings',
        method: 'POST',
        route: route,
        object: {
          theme: window.localStorage.cssTheme,
          menu_width: Math.round(window.localStorage.dashboardMenuWidthPercent),
          editor_keymap: window.localStorage.editorKeymap,
          ...settings,
        },
        horizontal: true,
        form: (f) => [
          a.h3("About"),
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
          a.h3("Dashboard"),
          f.field({
            key: "theme",
            as: "select",
            placeholder: "Default",
            selections: {
              dark: "Dark",
            },
          }),
          f.field({
            key: "menu_width",
            label: 'Menu width %',
            type: "number",
            min: '10',
            max: '90',
            step: '1',
          }),
          f.field({
            key: "editor_keymap",
            as: "select",
            placeholder: "None",
            selections: {
              vim: "Vim",
              emacs: "Emacs",
              sublime: "Sublime",
            },
          }),
        ],
        digest: (form) => {
          window.localStorage.cssTheme = form.theme
          window.localStorage.dashboardMenuWidthPercent = form.menu_width
          window.localStorage.editorKeymap = form.editor_keymap
          return {model: {about: form.about}}
        },
        success: () => {
          route.load('/settings/reload')
        }
      }),
    ]),
  }),
])
