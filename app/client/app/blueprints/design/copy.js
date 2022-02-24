app.blueprints.design.copy = (route) => a.div([
  a.h3('Copy'),
  app.jsonForm({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/copy`,
    method: 'POST',
    route: route,
    scope: 'blueprint',
    form: (f) => [
      f.field({
        key: 'new_identifier',
        label: false,
        placeholder: 'Enter an identifier for the copy',
      }),
    ],
    digest: (form) => form.blueprint,
    success: (identifier) => {
      // dashboardMenu.$render()
      route.open('..')
    },
  }),
]);
