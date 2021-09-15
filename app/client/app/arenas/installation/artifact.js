app.arenas.installation.artifact = (route) => (a,x) => [
  a.h3('Artifact'),
  app.fetch({
    url: `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/artifact`,
    success: (artifact) => [
      a.pre(artifact),
      a.br,
      app.button({
        label: app.icon('fas fa-check', 'Done'),
        onclick: () => route.open('..'),
        class: 'btn btn-primary',
      }),
    ]
  }),
]
