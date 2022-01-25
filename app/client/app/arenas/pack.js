app.arenas.pack = (route) => (a,x) => a.div([
  a.h3(`Pack`),
  a.p('Are you sure that you want to assemble the packs for this arena?'),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/pack`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('..'),
  }),
]);
