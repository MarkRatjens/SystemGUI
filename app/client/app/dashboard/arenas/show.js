app.dashboard.arenas.show = (router) => (a,x) => a.div([
  app.float({
    left: a.h1(router.params.arena_id),
    right: app.button({
      label: app.icon('fas fa-magic', 'Deploy'),
      onclick: () => router.open("deploy"),
      class: 'btn btn-primary',
    }),
  }),
  a.hr,
  app.dashboard.arenas.resolutions(router),
])
