app.blueprints.show = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/blueprints/@${route.params.blueprintIdentifier}`,
      `/api/blueprints/@${route.params.blueprintIdentifier}/relations`,
      `/api/blueprints/@${route.params.blueprintIdentifier}/readme`,
      `/api/blueprints/@${route.params.blueprintIdentifier}/license`,
    ],
    placeholder: app.spinner(`Loading ${route.params.blueprintIdentifier}`),
    success: ([blueprint, relations, readme, license]) => [
      // app.float({
      //   left: [
      //     a.p(
      //       location ?
      //       app.locationLabel(location) :
      //       app.placeholder('Not published'),
      //     ),
      //   ],
      //   right: [
      //     location ?
      //     app.button({
      //       label: app.icon('fas fa-file-import', 'Reimport'),
      //       onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/reimport`),
      //     }) : null,
      //   ],
      // }),
      // a.hr,
      app.float({
        left: [
          a.i([
            a.h3([
              a.img([], {
                src: `/api/blueprints/@${route.params.blueprintIdentifier}/icon/thumbnail`,
                height: '48',
                width: '48'
              }),
              ' ',
              (blueprint.about || {}).title || app.placeholder('No title')
            ]),
            a.p((blueprint.about || {}).explanation || app.placeholder('No explanation')),
          ]),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-drafting-compass', 'Design'),
            onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design`),
          }),
        ],
      }),
      a['div.mb-1'](app.blueprints.menu(route)),
      a['div.border.border-1.p-1'](
        route.mount({
          routes: {
            '/?': () => readme ? app.md(readme) : app.placeholder('No readme'),
            '/license': () => license ? app.md(license) : app.placeholder('No license'),
            '/bindings/?*': app.blueprints.bindings(blueprint, relations),
          }
        })
      ),
      a.hr,
      app.float({
       right: [
         app.button({
           label: app.icon('fa fa-trash'),
           title: 'Delete blueprint',
           class: 'btn btn-outline-danger',
           onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/delete`),
         }),
       ],
     }),
    ]
  }),
]
