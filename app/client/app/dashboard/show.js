app.dashboard.show = (route) => (a,x) => a['app-dashboard-show']([

  app.button({
    label: app.icon('fas fa-dot-circle', 'Arenas'),
    onclick: (el) => () => route.open('/arenas'),
  }),
  app.button({
    label: app.icon('fas fa-shapes', 'Blueprints'),
    onclick: (el) => () => route.open('/blueprints'),
  }),

])
