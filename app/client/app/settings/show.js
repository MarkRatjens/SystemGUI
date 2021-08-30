app.settings.show = (route) => (a,x) => a['app-settings-show']([

  app.button({
    label: app.icon('fas fa-paint-roller', 'Appearance'),
    onclick: () => route.open('appearance'),
  }),
  ' ',
  app.button({
    label: app.icon('fas fa-file-code', 'Editor'),
    onclick: () => route.open('editor'),
  }),

])
