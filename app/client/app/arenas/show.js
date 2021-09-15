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
          a['div.my-2.mx-4']((arena.domain || {}).identifier),
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
          (arena.bindings || []).length ?
          a.ul(((arena.bindings || []).map((binding) => a.li(app.bindingLabel(binding))))) :
          a['div.my-2.mx-4'](app.placeholder('No blueprints')),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-shapes', 'Blueprints'),
            onclick: () => route.open('blueprints'),
          }),
        ],
      }),
      a.hr,
      app.float({
        left: [
          app.button({
            label: app.icon('fas fa-layer-group', 'Installations'),
            title: 'Assebmle arena installations',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/installations`),
          }),
          app.button({
            label: app.icon('fab fa-mixer', 'Resolutions'),
            title: 'Resolutions arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/resolutions`),
          }),
          app.button({
            label: app.icon('fas fa-suitcase', 'Packs'),
            title: 'Packs arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/packs`),
          }),
          x.popup(app.icon('fas fa-luggage-cart', 'Provisions'), {
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
          app.button({
            label: app.icon('far fa-flag', 'Instruct'),
            onclick: () => route.open('instruct'),
          }),
        ],
        right: [],
      }),
      x.out(state),
      a.hr,
      app.float({
        left: [
          app.button({
            label: app.icon('fas fa-clone', 'Copy'),
            title: 'Copy arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/copy`),
          }),
          ' ',
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
