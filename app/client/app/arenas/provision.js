app.arenas.provision = (route) => (a,x) => a.div([
  a.h3(`Provision`),
  a.p('Are you sure that you want to assemble the provisions for this arena?'),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/provision`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('..'),
  }),
]);
