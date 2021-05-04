app.spaces.show = (router) => (a, x) => [
  a.h1('Spaces'),
  a.p(app.button({
    label: app.icon('fas fa-dot-circle', 'Arenas'),
    onclick: () => router.open("arenas"),
  })),
  a.p(app.button({
    label: app.icon('fas fa-map', 'Blueprints'),
    onclick: () => router.open('blueprints'),
  })),
]
