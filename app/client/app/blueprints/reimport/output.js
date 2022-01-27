app.blueprints.reimport.output = (route) => (a,x) => app.stream({
  label: ['Reimporting', 'Import', 'Git'],
  url: `/api/streaming/publications/import`,
  done: () => route.open('..'),
})
