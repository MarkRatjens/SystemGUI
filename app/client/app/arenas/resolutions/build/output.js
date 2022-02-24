app.arenas.resolutions.build.output = (route) => app.stream({
  label: {stream: 'Building', action: 'Build', tool: 'Docker'},
  url: `/api/streaming/packs/build`,
  done: () => route.open('..'),
})
