app.spaces.blueprints.index = (router) => (a, x) => [
  app.close(router),
  a.h1('Blueprints'),
  app.button({
    label: app.icon('fas fa-download', 'Import'),
    onclick: () => router.open("~import"),
  }),
  a.hr,
  app.fetch({
    url: '/api/blueprints',
    placeholder: app.spinner("Loading blueprints"),
    success: (blueprints, el) => [
      blueprints.length
      ? blueprints.map((blueprint) => a.p(app.button({
        label: app.icon("fa fa-caret-right", blueprint),
        onclick: () => router.open(blueprint),
      })))
      : app.placeholder('No blueprints'),
    ]
  }),
]
