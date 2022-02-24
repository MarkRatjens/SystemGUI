app.index = (route) => a['app-index']([

  app.button({
    label: app.icon('fas fa-dot-circle', 'Arenas'),
    onclick: () => route.open('/arenas'),
  }),
  app.button({
    label: app.icon('fas fa-shapes', 'Blueprints'),
    onclick: () => route.open('/blueprints'),
  }),

])
