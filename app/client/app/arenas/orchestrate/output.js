app.arenas.orchestrate.output = (route) => app.stream({
  label: {stream: 'Orchestrating', action: 'Orchestrate', tool: 'Docker Compose'},
  url: '/api/streaming/arenas/up',
  done: () => route.open('..'),
})
