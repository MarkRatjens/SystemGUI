app.capsules.delete = (route) => a.div([
  a.h3(`Delete`),
  a.p('Are you sure that you want to delete this capsule?'),
  app.jsonForm({
    url: `/api/capsules/@${route.params.capsuleIdentifier}`,
    method: "DELETE",
    route: route,
    success: () => {
      route.open('../..')
    },
  }),
]);
