app.blueprints.design.export.output = (route) => app.stream({
  label: {stream: 'Exporting', action: 'Export', tool: 'Git'},
  url: `/api/streaming/publications/export`,
  done: () => route.open('..'),
})
