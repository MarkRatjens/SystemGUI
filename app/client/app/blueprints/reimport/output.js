app.blueprints.reimport.output = (route) => (a,x) => app.stream({
  label: 'Reimporting',
  url: `/api/publications/@${route.params.blueprintIdentifier}/reimport/output`,
  route: route,
  complete: dashboardMenu.$render,
})
