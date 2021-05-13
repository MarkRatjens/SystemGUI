app.spaces.arenas.show = (router) => (a, x) => [
  app.button({
    label: app.icon('fas fa-project-diagram', 'Bind'),
    onclick: () => router.open("bind"),
  }),
  app.button({
    label: app.icon('fas fa-drafting-compass', 'Resolve'),
    onclick: () => router.open("resolve"),
  }),
  app.button({
    label: app.icon('fas fa-box-open', 'Packing'),
    onclick: () => router.open("packing"),
  }),
  app.button({
    label: app.icon('fas fa-running', 'Apply'),
    onclick: () => router.open("apply"),
  }),
  a.hr,
  app.fetch({
    url: [
      `/api/arenas/${router.params.arenaIdentifier}`,
      `/api/arenas/${router.params.arenaIdentifier}/status`,
    ],
    placeholder: app.spinner("Loading"),
    success: ([arena, status]) => [app.row({
      columns: [
        a.div([
          status.bounds.length
          ? status.bounds.map((bound) => a.p(app.button({
            label: [
              a.img([], {src: `/api/blueprints/${bound}/icon`, height: '24'}),
              ' ',
              bound,
            ],
            onclick: () => router.open(`/resolutions/${arena.identifier}::${bound}`),
          })))
          : app.placeholder('No resolutions for bound blueprints'),
        ]),
        a.div([
          status.unbounds.length
          ? status.unbounds.map((unbound) => a.p(app.button({
            label: [
              a.img([], {src: `/api/blueprints/${unbound}/icon`, height: '24'}),
              ' ',
              unbound,
            ],
            onclick: () => router.open(`/resolutions/${arena.identifier}::${unbound}`),
          })))
          : app.placeholder('No resolutions for unbound blueprints'),

        ]),
      ]
    })]


  }),
]
