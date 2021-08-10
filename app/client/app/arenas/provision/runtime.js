app.arenas.provision.runtime = (route) => (a,x) => a.div([
  a.h3(`Provision runtime`),
  a.p('Are you sure that you want to provision the runtime for this arena?'),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/provision/runtime`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('..'),
  }),
]);
