app.blueprints.index = (route) => a.div([
  app.close(route),
  a.h5('Blueprints'),
  a.p([
    app.button({
      label: app.icon('fas fa-file-import', 'Import'),
      onclick: (e, el) => route.open('import'),
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-plus', 'New'),
      onclick: (e, el) => route.open('new'),
    }),
  ]),
  app.fetch({
    url: '/api/blueprints',
    placeholder: a['div.p-2'](app.spinner("Loading blueprints")),
    success: blueprints => blueprints.length
    ? a.table([
      a.tbody(app.sortByIdentifier(blueprints).map(blueprint => a.tr([
        a.td([blueprint.identifier]),
        a.td([
          (blueprint.about || {}).title || a['!']('&nbsp;'),
          a.br,
          a.small([(blueprint.about || {}).explanation || a['!']('&nbsp;')]),
        ]),
        a.td(app.locationLabel(blueprint.location)),
        a.td(blueprint.utilized ? app.icon('fas fa-vector-square') : ''),
      ], {
        $on: {click: (e, el) => route.open(`@${blueprint.identifier}`)},
        class: 'app-clickable',
      }))),
    ], {
      class: 'table',
    })
    : app.placeholder('No blueprints'),
  }),
])
