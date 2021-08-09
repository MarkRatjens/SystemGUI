app.arenas.show = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/arenas/@${route.params.arenaIdentifier}`,
      `/api/arenas/@${route.params.arenaIdentifier}/state`
    ],
    placeholder: app.spinner(`Loading arena`),
    success: ([arena, state]) => [
      app.float({
        left: [
          a.i([
            a.h1([
              a.img([], {
                src: `/api/blueprints/@${(arena.about || {}).blueprint_identifier}/icon/thumbnail`,
                height: '48',
                width: '48'
              }),
              ' ',
              (arena.about || {}).title || app.placeholder('No title')
            ]),
            a.p((arena.about || {}).explanation || app.placeholder('No explanation')),
          ]),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-shapes', 'Blueprint'),
            onclick: () => route.open(`/blueprints/@${(arena.about || {}).blueprint_identifier}`),
          }),
        ],
      }),
      a.hr,
      app.float({
        left: [
          x.out({
            arena: arena.configuration,
            input: (arena.about || {}).input,
          }),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-sliders-h', 'Configuration'),
            onclick: () => route.open('configuration'),
          }),
        ],
      }),
      a.hr,
      app.float({
        left: [
          a['div.mt-2']((arena.domain || {}).identifier),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-globe', 'Domain'),
            onclick: () => route.open('domain'),
          }),
        ],
      }),
      a.hr,
      app.float({
        left: [
          x.out(arena.bindings),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-project-diagram', 'Bindings'),
            onclick: () => route.open('bindings'),
          }),
        ],
      }),
      a.hr,
      app.float({
        left: [
          app.button({
            label: app.icon('fas fa-folder-plus', 'Assemble'),
            title: 'Assebmle arena installations',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/assemble`),
          }),
          app.button({
            label: app.icon('fas fa-microscope', 'Resolve'),
            title: 'Resolve arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/resolve`),
          }),
          app.button({
            label: app.icon('fas fa-suitcase', 'Pack'),
            title: 'Pack arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/pack`),
          }),
          x.popup(app.icon('fas fa-luggage-cart', 'Provision'), {
            contentTag: {
              class: 'btn app-btn',
            },
            menu: [
              {
                label: 'Runtime',
                onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/runtime`),
              },
              {
                label: 'Providers',
                onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/providers`),
              },
              {
                label: 'Post-init',
                onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/post-init`),
              }
            ]
          }),
        ],
        right: [
          app.button({
            label: app.icon('far fa-flag', 'Init'),
            title: 'Init arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/init`),
          }),
          app.button({
            label: app.icon('fas fa-flag', 'Plan'),
            title: 'Plan arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/plan`),
          }),
          app.button({
            label: app.icon('fas fa-flag-checkered', 'Apply'),
            title: 'Apply arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/apply`),
          }),
        ],
      }),
      x.out(state),
      a.hr,
      app.float({
        left: [
          app.button({
            label: '{} JSON',
            title: 'Raw arena JSON',
            onclick: () => {
              modal.$open({
                title: `Raw ${route.params.arenaIdentifier} arena JSON`,
                size: 'lg',
                body: [
                  a.h5('Model'),
                  arena,
                  a.h5('State/Summary'),
                  state,
                ],
              })
            },
          }),
        ],
        right: [
          app.button({
            label: app.icon('fa fa-trash'),
            title: 'Delete arena',
            class: 'btn btn-outline-danger',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/delete`),
          }),
        ],
      }),
    ]
  }),
]
