app.arenas.installation.build.follow = (route) => (a,x) => app.stream({
  label: 'Building',
  url: `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/build/follow`,
  redirect: () => route.open('../..'),
})
