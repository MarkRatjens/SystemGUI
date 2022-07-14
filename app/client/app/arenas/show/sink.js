app.arenas.show.sink = (route, arena, state, resolutions) => a.div([
  app.button({
    label: app.icon('fas fa-ruler-combined', 'Resolve'),
    title: 'Resolve arena',
    onclick: () => route.open('resolve'),
  }),
  ' ',
  app.button({
    label: app.icon('fas fa-suitcase', 'Pack'),
    title: 'Pack arena',
    onclick: () => route.open('pack'),
  }),
  ' ',
  app.button({
    label: app.icon('fas fa-luggage-cart', 'Provision'),
    title: 'Provision arena',
    onclick: () => route.open('provision'),
  }),
  ' ',
  app.button({
    label: app.icon('fas fa-theater-masks', 'Stage'),
    title: 'Stage arena',
    onclick: () => route.open('stage'),
  }),
  ' ',
  app.button({
    label: app.icon('fas fa-hammer', 'Prebuild'),
    title: 'Prebuild arena images',
    onclick: () => route.open('prebuild'),
  }),
  ' ',
  app.button({
    label: app.icon('fas fa-magic', 'Orchestrate'),
    title: 'Orchestrate arena',
    onclick: () => route.open('orchestrate'),
  }),

  a.hr,
  app.row({
    columns: [
      a.div([
        (arena.role_providers || []).length ?
        a['ul.my-2'](((arena.role_providers || []).map((role_provider) => a.li(`${role_provider.role_identifier}: ${role_provider.provider_identifier}`)))) :
        a['div.my-2.mx-4'](app.placeholder('No provider roles')),
        a['div.my-2.mx-4']([
          app.button({
            label: app.icon('fas fa-tools', 'Provide'),
            title: 'Provide a role',
            onclick: () => route.open('provide'),
          }),
        ]),
      ]),
      a.div([
        (arena.domains || []).length ?
        a['ul.my-2'](((arena.domains || []).map((domain) => a.li(app.domainLabel(domain))))) :
        a['div.my-2.mx-4'](app.placeholder('No domains')),
        a['div.my-2.mx-4']([
          app.button({
            label: app.icon('fas fa-globe', 'Domains'),
            title: 'Manage domains',
            onclick: () => route.open('domains'),
          }),
        ]),
      ]),
      a.div([
        (arena.connections || []).length ?
        a['ul.my-2'](((arena.connections || []).map((connection) => a.li(connection.identifier)))) :
        a['div.my-2.mx-4'](app.placeholder('No arena connections')),
        a['div.my-2.mx-4']([
          app.button({
            label: app.icon('fas fa-vector-square', 'Arena'),
            title: 'Connect arena to arena',
            onclick: () => route.open('connect'),
          }),
        ]),
      ]),
      a.div([
        (arena.bindings || []).length ?
        a['ul.my-2'](((arena.bindings || []).map((binding) => a.li(binding.target_identifier)))) :
        a['div.my-2.mx-4'](app.placeholder('No staged blueprints')),
        a['div.my-2.mx-4']([
          app.button({
            label: app.icon('fas fa-shapes', 'Blueprint'),
            title: 'Bind a blueprint',
            onclick: () => route.open('bind'),
          }),
        ]),
      ]),
      a.div([
        (arena.images || []).length ?
        a['ul.my-2'](((arena.images || []).map((image) => a.li(image.identifier)))) :
        a['div.my-2.mx-4'](app.placeholder('No base images')),
        a['div.my-2.mx-4']([
          app.button({
            label: app.icon('fas fa-compact-disc', 'Base'),
            title: 'Base image',
            onclick: () => route.open('base_image'),
          }),
        ]),
      ]),
    ]
  }),
  a.br,
  app.arenas.resolutions(route),
  a.br,
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
