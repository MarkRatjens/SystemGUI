app.arenas.installation.build.output = (route) => (a,x) => app.stream({
  label: ['Building', 'Build', 'Docker'],
  url: `/api/streaming/packs/build`,
  done: () => route.open('..'),
})
