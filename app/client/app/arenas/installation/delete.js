app.arenas.installation.delete = (route) => (a,x) => a.div([
  a.h3(`Delete`),
  a.p('Are you sure that you want to delete this installation?'),
  app.form({
    url: `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => {
      dashboardMenu.$render()
      route.open('../..')
    },
  }),
]);
