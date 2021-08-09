app.arenas.provision['post-init'] = (route) => (a,x) => a.div([
  a.h3(`Provision post-init`),
  a.p('Are you sure that you want to provision the post-init providers for this arena?'),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/provision_providers`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('..'),
  }),
]);
