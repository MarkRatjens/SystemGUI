app.providers.delete = (route) => a.div([
  a.h3(`Delete`),
  a.p('Are you sure that you want to delete this provider?'),
  app.jsonForm({
    url: `/api/providers/@${route.params.providerIdentifier}`,
    method: "DELETE",
    route: route,
    success: () => {
      route.open('../..')
    },
  }),
]);
