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
            label: app.icon('fas fa-layer-group', 'Assemble'),
            title: 'Assebmle arena installations',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/assemble`),
          }),
          app.button({
            label: app.icon('fab fa-mixer', 'Resolve'),
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
            label: app.icon('far fa-flag', 'Instruction'),
            title: 'Instruction',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/instruction`),
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
