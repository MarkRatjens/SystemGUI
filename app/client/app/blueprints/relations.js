app.blueprints.relations = (route) => a.div([
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/relations`,
    placeholder: app.spinner(`Loading ${route.params.blueprintIdentifier}`),
    success: (relations) => a.div([
      app.tabs({
        tabs: [
          {
            label: 'Bindings',
            body: app.blueprints.relations.chart(route, relations),
          },
          {
            label: 'Blueprints',
            body: [
              a.p([
                a.small('Parents'),
                a['div.border-top'](
                  relations.blueprints.parents.length
                  ? relations.blueprints.parents.map
                  (blueprint => app.clickable(
                    a['div.border-bottom.p-2']([blueprint]),
                    () => route.open(`/blueprints/@${blueprint}`)
                  ))
                  : app.placeholder('None'),
                ),
              ]),
              a.p([
                a.small('Descendants'),
                a['div.border-top'](
                  relations.blueprints.descendants.length
                  ? relations.blueprints.descendants.map
                  (blueprint => app.clickable(
                    a['div.border-bottom.p-2']([blueprint]),
                    () => route.open(`/blueprints/@${blueprint}`)
                  ))
                  : app.placeholder('None'),
                ),
              ]),
            ]
          },
          {
            label: 'Arenas',
            body: [
              a.p([
                a.small('Direct'),
                a['div.border-top'](
                  relations.arenas.direct.length
                  ? relations.arenas.direct.map
                  (arena => app.clickable(
                    a['div.border-bottom.p-2']([arena]),
                    () => route.open(`/arenas/@${arena}`)
                  ))
                  : app.placeholder('None'),
                ),
              ]),
              a.p([
                a.small('Indirect'),
                a['div.border-top'](
                  relations.arenas.indirect.length
                  ? relations.arenas.indirect.map
                  (arena => app.clickable(
                    a['div.border-bottom.p-2']([arena]),
                    () => route.open(`/arenas/@${arena}`)
                  ))
                  : app.placeholder('None'),
                ),
              ]),
            ]
          },
        ]
      }),
    ]),
  }),
])
