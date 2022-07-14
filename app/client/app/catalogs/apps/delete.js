app.apps.delete = (route) => a['app-apps-delete']([
  a.h3("Delete"),
  a.p('Are you sure that you want to delete this app?'),
  app.jsonForm({
    url: `/api/apps/@${route.params.appIdentifier}`,
    method: 'DELETE',
    route: route,
    success: () => route.open('../..'),
  }),
])
