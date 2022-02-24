app.arenas.resolve = (route) => a.div([
  a.h3(`Resolve`),
  a.p('Are you sure that you want to assemble the resolutions for this arena?'),
  app.jsonForm({
    url: `/api/arenas/@${route.params.arenaIdentifier}/resolve`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => a({$init: () => route.open('..')}),
  }),
]);
