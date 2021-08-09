app.arenas.provision.providers = (route) => (a,x) => a.div([
  a.h3(`Provision providers`),
  a.p('Are you sure that you want to provision the providers for this arena?'),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/provision/providers`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('..'),
  }),
]);
