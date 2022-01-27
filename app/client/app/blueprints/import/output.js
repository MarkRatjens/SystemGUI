app.blueprints.import.output = (route) => (a,x) => app.stream({
  label: ['Importing', 'Import', 'Git'],
  url: `/api/streaming/publications/import`,
  done: () => route.open('..'),
  complete: (el) => dashboardMenu.$render(),
})
