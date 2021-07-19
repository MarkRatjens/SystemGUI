app.blueprints.index = (route) => (a,x) => [
  app.close(route),
  a.h1('Blueprints'),
  // app.button({
  //   label: app.icon('fas fa-th', 'Apps'),
  //   onclick: () => route.open('apps'),
  // }),
  app.button({
    label: app.icon('fas fa-file-import', 'Import'),
    onclick: () => route.open('import'),
  }),
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => route.open('new'),
  }),
  app.fetch({
    url: '/api/blueprints',
    placeholder: a['div.p-2'](app.spinner("Loading blueprints")),
    success: blueprints => [
      a.table([
        a.tbody(blueprints.map(blueprint => a.tr([
          a.td([blueprint.identifier]),
          a.td([
            (blueprint.about || {}).title || a['!']('&nbsp;'),
            a.br,
            a.small([(blueprint.about || {}).explanation || a['!']('&nbsp;')]),
          ]),
          a.td([app.publicationLabel(blueprint.publication) || '']),
          a.td([blueprint.utilized ? app.icon('fas fa-dot-circle') : null]),
        ], {
          $on: {click: () => route.open(`@${blueprint.identifier}`)},
          class: 'app-clickable',
        }))),
      ], {
        class: 'table',
      })
    ],
  }),

]
