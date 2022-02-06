app.arenas.up.output = (route) => (a,x) => app.stream({
  label: ['Arena up', 'Up', 'Docker Compose'],
  url: '/api/streaming/arenas/up',
  done: () => route.open('..'),
})
