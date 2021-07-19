app.arenas.delete = (route) => (a,x) => a.div([
  a.h3(`Delete`),
  a.p('Are you sure that you want to delete this arena?'),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => {
      dashboardMenu.$render()
      route.open('../..')
    },
  }),
]);
