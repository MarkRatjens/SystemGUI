app.arenas.show = (route) => a['app-arenas-arena-show']([
  app.fetch({
    url: [
      `/api/arenas/@${route.params.arenaIdentifier}`,
      `/api/arenas/@${route.params.arenaIdentifier}/state`,
      // `/api/arenas/@${route.params.arenaIdentifier}/relations`,
      `/api/resolutions/list`,
    ],
    query: [
      {}, {}, {arena_identifier: route.params.arenaIdentifier}
    ],
    placeholder: app.spinner(`Loading arena`),
    success: ([arena, state, resolutions]) => {
      return a.div([
        app.button({
          label: app.icon('fas fa-magic', 'Orchestrate'),
          title: 'Orchestrate arena',
          onclick: () => route.open('orchestrate'),
        }),
        a.hr,
        app.float({
          left: [
            (arena.domains || []).length ?
            a['ul.my-2'](((arena.domains || []).map((domain) => a.li(app.domainLabel(domain))))) :
            a['div.my-2.mx-4'](app.placeholder('No domains')),
          ],
          right: [
            app.button({
              label: app.icon('fas fa-globe', 'Domains'),
              onclick: () => route.open('domains'),
            }),
          ],
        }),
        app.row({
          columns: [
            [
              (arena.bindings || []).length ?
              a['ul.my-2'](((arena.bindings || []).map((binding) => a.li(binding.target_identifier)))) :
              a['div.my-2.mx-4'](app.placeholder('No blueprint bindings')),
              a['div.my-2.mx-4']([
                app.button({
                  label: app.icon('fas fa-shapes', 'Blueprint'),
                  title: 'Bind blueprint to arena',
                  onclick: () => route.open('bind'),
                }),
              ]),
            ],
            [
              (arena.connections || []).length ?
              a['ul.my-2'](((arena.connections || []).map((connection) => a.li(connection.identifier)))) :
              a['div.my-2.mx-4'](app.placeholder('No arena bindings')),
              a['div.my-2.mx-4']([
                app.button({
                  label: app.icon('fas fa-vector-square', 'Arena'),
                  title: 'Bind arena to arena',
                  onclick: () => route.open('connect'),
                }),
              ]),
            ],
          ],
        }),
        a.hr,
        a.h5('Resolutions'),
        app.arenas.resolutions(route),
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
      ])
    },

  }),
])
