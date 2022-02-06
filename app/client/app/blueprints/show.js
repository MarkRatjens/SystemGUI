app.blueprints.show = (route) => (a,x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}`,
    placeholder: app.spinner(`Loading blueprint`),
    success: (blueprint) => [
      app.float({
        left: [
          app.blueprintLabel(blueprint),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-drafting-compass', 'Design'),
            onclick: (el) => (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design`),
          }),
        ],
      }),
      a['div.mb-1'](app.blueprints.menu(route)),
      a['div.border.border-1.p-1'](
        route.mount({
          routes: {
            '/?': app.blueprints.readme,
            '/license': app.blueprints.license,
            // '/bindings/?*': app.blueprints.bindings(blueprint),
            // '/utilization/?*': app.blueprints.utilization(blueprint),
          }
        })
      ),
      a.br,
      app.float({
       left: [],
       right: [
         app.button({
           label: app.icon('fa fa-trash'),
           title: 'Delete blueprint',
           class: 'btn btn-outline-danger',
           onclick: (el) => (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/delete`),
         }),
       ],
     }),
    ]
  }),
]
