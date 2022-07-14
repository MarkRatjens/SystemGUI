app.arenas.stage = (route) => a.div([
  a.h3(`Stage`),
  a.p('Are you sure that you want to stage this arena?'),
  app.jsonForm({
    url: `/api/arenas/@${route.params.arenaIdentifier}/stage`,
    method: "POST",
    route: route,
    success: () => route.open('..'),
  }),
]);
