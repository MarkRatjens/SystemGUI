app.blueprints.import.output = (route) => app.stream({
  label: {stream: 'Importing', action: 'Import', tool: 'Git'},
  url: `/api/streaming/publications/import`,
  done: () => route.open('..'),
})
