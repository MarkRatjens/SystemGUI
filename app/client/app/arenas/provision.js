app.arenas.provision = (route) => a.div([
  a.h3(`Provision`),
  a.p('Are you sure that you want to assemble the provisions for this arena?'),
  app.jsonForm({
    url: `/api/arenas/@${route.params.arenaIdentifier}/orchestrate`,
    method: "POST",
    route: route,
    success: () => route.open('..'),
  }),
]);
