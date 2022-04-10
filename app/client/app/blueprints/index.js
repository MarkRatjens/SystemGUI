app.blueprints.index = (route) => a.div([
  app.close(route),
  a.p([
    app.button({
      label: app.icon('fa fa-plus', 'New'),
      title: 'New blueprint',
      onclick: (e) => route.open('new'),
    }),
    ' ',
    app.button({
      label: app.icon('fas fa-file-import', 'Import'),
      title: 'Import blueprint',
      onclick: (e) => route.open('import'),
    }),
  ]),
  a.small('Blueprints'),
  app.fetch({
    url: '/api/blueprints',
    placeholder: a['div.p-2'](app.spinner("Loading blueprints")),
    success: (blueprints, el) => blueprints.length
    ? a['div.container-fluid.border-top'](blueprints.map(blueprint => app.clickable(
      a['div.row.app-clickable.border-bottom']([
        a['div.col-md-3.p-2']([
          blueprint.identifier,
        ]),
        a['div.col-md-3.p-2']([
          (blueprint.about || {}).title || a['!']('&nbsp;'),
        ]),
        a['div.col-md.p-2']([
          a.small([(blueprint.about || {}).explanation || a['!']('&nbsp;')]),
        ]),
      ]),
      () => route.open(`@${blueprint.identifier}`)
    ))
  )
  : a['.p-2'](app.placeholder('No blueprints')),
}),
])
