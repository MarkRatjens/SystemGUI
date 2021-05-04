app.spaces.arenas.index = (router) => (a, x) => [
  app.close(router),
  a.h1('Arenas'),
  app.button({
    label: app.icon('fas fa-plus', 'New'),
    onclick: () => router.open("~new"),
  }),
  a.hr,
  app.fetch({
    url: '/api/arenas',
    placeholder: app.spinner("Loading arenas"),
    success: (arenas, el) => [
      arenas.length
      ? arenas.map((arena) => a.p(app.button({
        label: app.icon("fa fa-caret-right", arena),
        onclick: () => router.open(arena),
      })))
      : app.placeholder('No arenas'),
    ]
  }),
]
