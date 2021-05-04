app.spaces.arenas.show = (router) => (a, x) => [
  app.close(router),
  a.h1(`${router.params.arenaIdentifier}`),
  app.button({
    label: app.icon('fas fa-project-diagram', 'Bind'),
    onclick: () => router.open("bind"),
  }),
  a.hr,
  app.fetch({
    url: `/api/arenas/${router.params.arenaIdentifier}`,
    placeholder: app.spinner("Loading"),
    success: (arena) => [
      arena.bindings.length
      ? arena.bindings.map((binding) => a.p(app.button({
        label: [
          a.img([], {src: `/api/blueprints/${binding.target_identifier}/icon`, height: '24'}),
          ' ',
          binding.target_identifier,
        ],
        onclick: () => router.open(`/resolutions/${arena.identifier}::${binding.target_identifier}`),
      })))
      : app.placeholder('No bindings'),


      // a.h1(arena.identifier),
      // app.spaces.arenas.show.chart(router, arena),
      // router.mount({
      //   routes: {
      //     '/?': x.out(arena),
      //     '/binding': app.spaces.arenas.binding,
      //     '/configure': app.spaces.arenas.configure,
      //   },
      // }),
    ]
  })
]
