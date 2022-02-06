app.arenas.artifact = (route) => (a,x) => [
  a.h3('Artifact'),
  app.fetch({
    url: `/api/provisioning/@${route.params.arenaIdentifier}/artifact`,
    success: (artifact) => [
      a.pre(artifact),
      a.br,
      app.button({
        label: app.icon('fas fa-check', 'Done'),
        onclick: (el) => () => route.open('..'),
        class: 'btn btn-primary',
      }),
    ]
  }),
]
