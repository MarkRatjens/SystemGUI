app.arenas.installation.show = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/summary`,
    ],
    success: ([installation, summary]) => [
      app.float({
        left: [
          x.out({
            installation: installation.configuration,
            input: installation.input,
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
          a['div.mt-2.ml-4']((installation.domain || {}).identifier),
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
          a.ol(((installation.bindings || []).map((binding) => a.li(app.bindingLabel(binding))))),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-project-diagram', 'Bindings'),
            onclick: () => route.open('bindings'),
          }),
        ],
      }),
      a.hr,
      summary.resolution.exist ?
      app.arenas.installation.resolution(route) :
      app.placeholder('No resolution'),
      a.hr,
      app.float({
        left: [
          app.button({
            label: '{} JSON',
            title: 'Raw installation JSON',
            onclick: () => {
              modal.$open({
                title: `Raw ${route.params.arenaIdentifier} > ${route.params.blueprintIdentifier} installation JSON`,
                size: 'lg',
                body: [
                  a.h5('Model'),
                  installation,
                  a.h5('State/Summary'),
                  summary,
                ],
              })
            },
          }),
        ],
        right: [
          app.button({
            label: app.icon('fa fa-trash'),
            title: 'Delete installation',
            class: 'btn btn-outline-danger',
            onclick: () => route.open('delete'),
          }),
        ],
      }),
    ]
  }),
]
