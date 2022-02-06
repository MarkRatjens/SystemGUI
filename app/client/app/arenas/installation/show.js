app.arenas.installation.show = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/summary`,
      `/api/blueprints/@${route.params.blueprintIdentifier}/form`,
    ],
    success: ([installation, summary, form]) => [
      app.float({
        left: [
          x.out(installation.input),

        ],
        right: [
          app.button({
            label: app.icon('fas fa-sliders-h', 'Input'),
            onclick: (el) => () => route.open('input'),
          }),
        ],
      }),
      a.hr,
      summary.resolution.exist ?
      app.arenas.installation.resolution(route) :
      a['div.my-2.mx-4'](app.placeholder('No resolution')),
      a.hr,
      app.float({
        left: [
          app.button({
            label: '{} JSON',
            title: 'Raw installation JSON',
            onclick: (el) => () => {
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
            onclick: (el) => () => route.open('delete'),
          }),
        ],
      }),
    ]
  }),
]
