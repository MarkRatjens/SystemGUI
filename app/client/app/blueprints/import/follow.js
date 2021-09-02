app.blueprints.import.follow = (route) => (a,x) => app.stream({
  label: 'Importing',
  url: `/api/publications/import/follow?${x.lib.query.stringify(route.params)}`,
  redirect: () => route.open('../..'),
  complete: dashboardMenu.$render,
})
