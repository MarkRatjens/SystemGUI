app.blueprints.design.export.output = (route) => (a,x) => app.stream({
  label: ['Exporting', 'Export', 'Git'],
  url: `/api/streaming/publications/export`,
  done: () => route.open('..'),
})
