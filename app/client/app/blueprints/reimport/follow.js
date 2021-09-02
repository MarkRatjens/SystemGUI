app.blueprints.reimport.follow = (route) => (a,x) => app.stream({
  label: 'Reimporting',
  url: `/api/publications/@${route.params.blueprintIdentifier}/reimport/follow`,
  redirect: () => route.open('../..'),
  complete: dashboardMenu.$render,
})
