app.blueprints.design.license.show = (route, blueprint) => a.div([
  app.button({
    label: app.icon('fas fa-edit', 'Edit'),
    title: 'Edit license',
    onclick: () => route.open('edit'),
  }),
  a['pre.well.p-1.mt-1']([
    app.fetch({
      url: `/api/blueprints/@${route.params.blueprintIdentifier}/license`,
      placeholder: app.spinner(),
      success: (license, el) => license || app.placeholder('No license')
    }),
  ])

]);
