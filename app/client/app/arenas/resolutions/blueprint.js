app.arenas.resolutions.blueprint = (route, resolution) => a.div([
  app.float({
    left: [
      app.fetch({
        url: `/api/blueprints/@${route.params.blueprintIdentifier}`,
        placeholder: app.spinner(`Loading ${route.params.blueprintIdentifier}`),
        success: (blueprint) => a.div([
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
        ]),
      }),
    ],
    right: [
      app.button({
        label: app.icon('fas fa-shapes', 'Blueprint'),
        onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}`),
      }),
    ],
  }),
])
