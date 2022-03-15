app.arenas.orchestrate = (route) => a.div([
  a.h3(`Orchestrate`),
  a.p('Are you sure that you want to orchestrate this arena?'),
  app.jsonForm({
    url: `/api/arenas/@${route.params.arenaIdentifier}/apply`,
    method: "POST",
    route: route,
    success: () => route.load('output'),
  }),
]);
