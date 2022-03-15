app.arenas.delete = (route) => a.div([
  a.h3(`Delete`),
  a.p('Are you sure that you want to delete this arena?'),
  app.jsonForm({
    url: `/api/arenas/@${route.params.arenaIdentifier}`,
    method: "DELETE",
    route: route,
    success: () => {
      route.open('../..')
    },
  }),
]);
