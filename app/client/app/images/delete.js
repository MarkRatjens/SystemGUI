app.images.delete = (route) => a.div([
  a.h3(`Delete`),
  a.p('Are you sure that you want to delete this image?'),
  app.jsonForm({
    url: `/api/images/@${route.params.imageIdentifier}`,
    method: "DELETE",
    route: route,
    success: () => {
      route.open('../..')
    },
  }),
]);
