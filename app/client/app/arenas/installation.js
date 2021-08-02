app.arenas.installation = (route) => (a,x) => [
  app.float({
    left: [
      a.h1(route.params.blueprintIdentifier),
    ],
  }),
  a.hr,
  app.float({
    left: [
      app.fetch({
        url: `/api/blueprints/@${route.params.blueprintIdentifier}`,
        placeholder: app.spinner(`Loading ${route.params.blueprintIdentifier}`),
        success: (blueprint) => [
          a.i([
            a.h3([
              a.img([], {
                src: `/api/blueprints/@${route.params.blueprintIdentifier}/icon/thumbnail`,
                height: '48',
                width: '48'
              }),
              ' ',
              (blueprint.about || {}).title || app.placeholder('No title')
            ]),
            a.p((blueprint.about || {}).explanation || app.placeholder('No explanation')),
          ]),
        ],
      }),
    ],
    right: [
      app.button({
        label: app.icon('fas fa-shapes', 'Blueprint'),
        onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}`),
      }),
    ],
  }),
  a.hr,
  route.mount({
    routes: {
      '/?': app.arenas.installation.show,
      '/edit/?': app.arenas.installation.edit,
      '/build': app.arenas.installation.build,
    }
  }),
]
