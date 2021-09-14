app.arenas.resolutions = (route) => (a,x) => a.div([
  a.h3(`Resolutions`),
  a.p('Are you sure that you want to ass the resolutions for this arena?'),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/resolutions`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('..'),
  }),
]);
