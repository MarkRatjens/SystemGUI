app.blueprints.delete = (route) => a.div([
  a.h3(`Delete`),
  a.p('Are you sure that you want to delete this blueprint?'),
  app.jsonForm({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => {
      // dashboardMenu.$render()
      route.open('../..')
      return ''
    },
  }),
]);
