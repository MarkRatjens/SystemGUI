app.blueprints.design.files.delete = (route) => a.div([
  a.h3(`Delete`),
  a.p(route.params.fileIdentifier.replace(/::/g, '/')),
  a.p('Are you sure that you want to delete this file?'),
  app.jsonForm({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/files/@${route.params.fileIdentifier.replace(/::/g, '/')}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => a({$init: () => route.open('../..')}),
  }),
])
