app.settings.show = (route) => a.div([
  app.close(route),
  a.p([
    app.button({
      label: app.icon('fas fa-globe', 'Domains'),
      title: 'Domains',
      onclick: (e) => route.open('domains'),
    }),
    ' ',
    app.button({
      label: app.icon('fas fa-tools', 'Providers'),
      title: 'Providers',
      onclick: (e) => route.open('providers'),
    }),
    ' ',
    app.button({
      label: app.icon('fas fa-user-secret', 'Keys'),
      title: 'Keys',
      onclick: (e) => route.open('user_keys'),
    }),
    ' ',
    app.button({
      label: app.icon('fas fa-th-list', 'Catalogs'),
      title: 'Catalogs',
      onclick: (e) => route.open('catalogs'),
    }),
  ]),
  a['div'](a.small('Settings')),
  app.fetch({
    url: [
      '/api/settings',
      '/api/domains',
      '/api/providers',
      '/api/user_keys',
    ],
    placeholder: app.spinner('Loading settings'),
    success: ([settings, domains, providers, user_keys], el) => a.div([
      app.clickable(a['div.p-2']([
        a['div.border-bottom'](a.small('About')),
          app.float({
            left: (about => a.p([
              a.div(about.label || ''),
              a.div(about.explanation || ''),
            ]))(settings.about || {}),
            right: (colors => a['div.m-1.p-2'](
              a['div.p-2']({style: {backgroundColor: colors.text}}),
              {style: {backgroundColor: colors.background}}
            ))(settings.colors || {})
          }),
      ]), () => route.open('about')),
      app.clickable(a['div.p-2']([
        a['div.border-bottom'](a.small('Editor')),
        {
          vim: "Vim",
          emacs: "Emacs",
          sublime: "Sublime",
        }[window.localStorage.editorKeymap] || 'No',
        ' key map',
      ]), () => route.open('editor')),
    ])
  }),
])
