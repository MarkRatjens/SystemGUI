app.arenas.plan = (route) => (a,x) => a.div([
  a.h3(`Plan`),
  a.p('Are you sure that you want to plan this arena?'),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/plan`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('output'),
  }),
]);
