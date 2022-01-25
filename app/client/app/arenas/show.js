app.arenas.show = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/arenas/@${route.params.arenaIdentifier}`,
      `/api/arenas/@${route.params.arenaIdentifier}/state`,
      `/api/installations/list`,
    ],
    query: [
      {}, {}, {arena_identifier: route.params.arenaIdentifier}
    ],
    placeholder: app.spinner(`Loading arena`),
    success: ([arena, state, installations]) => {

      let inputRequired = installations.map(installation => {
        return (
          state.uncomfirmed_installations.find(bp => installation == bp) ||
          state.stale_installations.find(bp => installation == bp)
        )
      }).filter(a => a).map(a => a.split('::')[1])

      return [
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
        app.row({
          columns: [
            [
              (arena.bindings || []).length ?
              a['ul.my-2'](((arena.bindings || []).map((binding) => a.li(binding.target_identifier)))) :
              a['div.my-2'](app.placeholder('No blueprint bindings')),
            ],
            [
              (arena.connections || []).length ?
              a['ul.my-2'](((arena.connections || []).map((connection) => a.li(connection.identifier)))) :
              a['div.my-2'](app.placeholder('No arena bindings')),
            ],
            [
              app.float({
                right: [
                  x.popup(app.icon('fas fa-project-diagram', 'Bind'), {
                    contentTag: {
                      class: 'btn app-btn',
                    },
                    menu: [
                      {
                        label: 'Blueprint',
                        title: 'Bind a blueprint to this arena',
                        onclick: () => route.open('bind'),
                      },
                      {
                        label: 'Arena',
                        title: 'Bind another arena to this arena',
                        onclick: () => route.open('connect'),
                      },
                    ]
                  }),
                ],
              }),
            ]
          ],
        }),
        a.hr,
        inputRequired.length ? [
          'Input required',
          x.out(inputRequired)
        ] : null,
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
        app.button({
          label: app.icon('fas fa-luggage-cart', 'Provision'),
          title: 'Provision arena',
          onclick: () => route.open('provision'),
        }),
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
    },

  }),
]
