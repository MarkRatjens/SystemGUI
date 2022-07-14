app.blueprints.design.readme.show = (route, blueprint) => a.div([
  app.button({
    label: app.icon('fas fa-edit', 'Edit'),
    title: 'Edit readme',
    onclick: () => route.open('edit'),
  }),
  a['pre.well.p-1.mt-1']([
    app.fetch({
      url: `/api/blueprints/@${route.params.blueprintIdentifier}/readme`,
      placeholder: app.spinner(),
      success: (readme, el) => readme || app.placeholder('No readme'),
    }),
  ])

]);
