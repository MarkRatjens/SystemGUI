app.arenas.installation.show = (route) => (a,x) => [
  app.button({
    label: app.icon('fas fa-edit', 'Edit'),
    onclick: () => route.open('edit'),
  }),
  a.hr,
  app.fetch({
    url: `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
    success: installation => [
      x.out(installation.input),
    ]
  }),
]
