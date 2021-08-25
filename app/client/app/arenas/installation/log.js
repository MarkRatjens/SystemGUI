app.arenas.installation.log = (route) => (a,x) => [
  app.fetch({
    url: `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/log`,
    success: (log) => [
      app.xterm({label: 'Build log', text: log}),
      a.br,
      app.button({
        label: app.icon('fas fa-check', 'Done'),
        onclick: () => route.open('..'),
        class: 'btn btn-primary',
      }),
    ]
  }),
]
