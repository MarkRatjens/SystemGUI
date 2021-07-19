app.arenas.installation.edit = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      `/api/blueprints/@${route.params.blueprintIdentifier}/form`,
    ],
    success: ([installation, form]) => app.formDSL.builder.form({
      components: form.components,
    }, installation.input, {
      action: `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/input`,
      scope: 'input',
      route: route,
    }),
  }),

]
