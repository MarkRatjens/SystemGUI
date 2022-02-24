app.blueprints.reimport.output = (route) => app.stream({
  label: {stream: 'Reimporting', action: 'Import', tool: 'Git'},
  url: `/api/streaming/publications/import`,
  done: () => route.open('..'),
})
