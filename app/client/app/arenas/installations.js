app.arenas.installations = (route) => (a,x) => a.div([
  a.h3(`Installations`),
  a.p('Are you sure that you want to assemble the installations for this arena?'),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/assemble`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => {
      dashboardMenu.$render()
      route.open('..')
    },
  }),
]);
