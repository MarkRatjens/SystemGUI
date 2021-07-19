app.blueprints.design.form.edit = (route) => (a, x) => a['app-blueprint-input-form']([
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/form`,
    placeholder: app.spinner('Loading blueprint form'),
    success: form => app.jsonForm({
      url: `/api/blueprints/@${route.params.blueprintIdentifier}/form`,
      route: route,
      object: form,
      scope: 'form',
      form: app.formDSL.designer.form.components,
    }),
  }),
])
