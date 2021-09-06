app.arenas.init = (route) => (a,x) => a.div([
  a.h3(`Initialize`),
  a.p('Are you sure that you want to initialize this arena?'),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/init`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('output'),
  }),
]);
