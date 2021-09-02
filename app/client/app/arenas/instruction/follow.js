app.arenas.instruction.follow = (route) => (a,x) => app.stream({
  label: {init: 'Initializing', plan: 'Planning', apply: 'Applying'}[route.params.command],
  url: `/api/arenas/@${route.params.arenaIdentifier}/instruction?command=${route.params.command}`,
  redirect: () => route.open('../..'),
})
