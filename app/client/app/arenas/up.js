app.arenas.up = (route) => (a,x) => a.div([
  a.h3(`Up`),
  a.p('Are you sure that you want to bring up this arena?'),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/apply`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.load('output'),
  }),
]);
