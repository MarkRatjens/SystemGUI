app.blueprints.import.output = (route) => (a,x) => app.stream({
  label: ['Importing', 'Import', 'Git'],
  url: `/api/outputting/import`,
  route: route,
  complete: (el) => dashboardMenu.$render(),
})
