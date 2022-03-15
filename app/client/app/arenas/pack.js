app.arenas.pack = (route) => a.div([
  a.h3(`Pack`),
  a.p('Are you sure that you want to assemble the packs for this arena?'),
  app.jsonForm({
    url: `/api/arenas/@${route.params.arenaIdentifier}/pack`,
    method: "POST",
    route: route,
    success: () => route.open('..'),
  }),
]);
