app.blueprints.show = (route) => (a,x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}`,
    placeholder: app.spinner(`Loading blueprint`),
    success: (blueprint) => [
      app.float({
        left: [
          a.i([
            a.h1([
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
            '/?': app.blueprints.readme,
            '/license': app.blueprints.license,
            '/bindings/?*': app.blueprints.bindings(blueprint),
            '/relations/?*': app.blueprints.relations(blueprint),
          }
        })
      ),
      a.br,
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
