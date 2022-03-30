app.settings.show = (route) => a.div([
  app.close(route),
  a['h5.py-2']("Settings"),
  a.hr,
  app.fetch({
    url: [
      '/api/settings',
      '/api/domains',
      '/api/user_keys'
    ],
    placeholder: app.spinner('Loading settings'),
    success: ([settings, domains, user_keys], el) => a.div([
      app.report({
        object: {
          ...settings,
          domains,
          user_keys,
          editor: {
            key_map: window.localStorage.editorKeymap,
          }
        },
        report: r => [
          app.clickable(
            a['div.p-1'](
              r.field({
                key: 'about',
                as: 'one',
                horizontal: true,
                report: rr => [
                  a['div.p-1'](app.float({
                    left: a['div.ml-4']([
                      a.h5((rr.object || {}).label || ''),
                      a.p((rr.object || {}).explanation || ''),
                    ]),
                    right: rr.object ? a['div.p-2'](
                      a['div.p-2']({style: {backgroundColor: rr.object.color.text}}),
                      {style: {backgroundColor: rr.object.color.background}}
                    ) : a.br,
                  })),
                ]
              }),
            ),
            () => route.open('about')
          ),
          app.clickable(
            a['div.p-1'](
              r.field({
                key: 'domains',
                as: 'output',
                horizontal: true,
                ingest: domains => domains.map(
                  domain => a([
                    domain.identifier, ' ',
                    domain.primary ? app.icon('fas fa-star') : '',
                  ])
                ),
              }),
            ),
            () => route.open('domains')
          ),
          app.clickable(
            a['div.p-1'](
              r.field({
                key: 'user_keys',
                as: 'output',
                horizontal: true,
                ingest: user_keys => user_keys.map(user_key => user_key.identifier),
              }),
            ),
            () => route.open('user_keys')
          ),
          app.clickable(
            a['div.p-1'](
              r.field({
                key: 'editor',
                label: 'Editor key map',
                as: 'one',
                horizontal: true,
                report: rr => [
                  rr.field({
                    key: 'key_map',
                    label: false,
                    as: 'select',
                    selections: {
                      vim: "Vim",
                      emacs: "Emacs",
                      sublime: "Sublime",
                    },
                  }),
                ]
              }),
            ),
            () => route.open('editor')
          ),
        ]
      }),
    ])
  }),
])
