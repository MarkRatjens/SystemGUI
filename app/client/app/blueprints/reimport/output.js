app.blueprints.reimport.output = (route) => (a,x) => app.stream({
  label: ['Reimporting', 'Import', 'Git'],
  url: `/api/outputting/import`,
  route: route,
})
