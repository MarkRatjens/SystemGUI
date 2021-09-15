app.arenas.installation.build.output = (route) => (a,x) => app.stream({
  label: ['Building', 'Build', 'Docker'],
  url: `/api/outputting/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/build`,
  done: () => route.open('..'),
  keys: {output: 'stream'},
})
