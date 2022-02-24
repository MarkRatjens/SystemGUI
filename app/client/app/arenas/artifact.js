app.arenas.artifact = (route) => a.div([
  a.h3('Artifact'),
  app.fetch({
    url: `/api/provisioning/@${route.params.arenaIdentifier}/artifact`,
    success: (artifact) => a.div([
      a.pre(artifact),
      a.br,
      app.button({
        label: app.icon('fas fa-check', 'Done'),
        onclick: () => route.open('..'),
        class: 'btn btn-primary',
      }),
    ])
  }),
])
