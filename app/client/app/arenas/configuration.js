app.arenas.configuration = (route) => (a,x) => [
  a.h3('Configuration'),
  app.fetch({
    url: `/api/arenas/@${route.params.arenaIdentifier}`,
    success: (arena) => [
      app.fetch({
        url: `/api/blueprints/@${arena.about.blueprint_identifier}/form`,
        success: (form) => [
          ax.is.array(form.components) && form.components.length ?
          app.formDSL.builder.form({
            components: form.components,
          }, (arena.about || {}).input, {
            action: `/api/arenas/@${route.params.arenaIdentifier}`,
            route: route,
            digest: (form) => {
              arena.about = {
                ...arena.about,
                input: app.compact(form),
              }
              return {model: arena}
            }
          }) :
          [
            a.p(app.placeholder('Nothing to configure.')),
            app.button({
              label: app.icon('fas fa-check', 'Done'),
              onclick: () => route.open('..'),
              class: 'btn btn-primary',
            }),
          ],
        ],
      }),
    ],
  }),
]
