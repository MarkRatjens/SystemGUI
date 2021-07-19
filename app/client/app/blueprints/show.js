app.blueprints.show = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/blueprints/@${route.params.blueprintIdentifier}`,
      `/api/blueprints/@${route.params.blueprintIdentifier}/specification`,
      `/api/blueprints/@${route.params.blueprintIdentifier}/readme`,
      `/api/blueprints/@${route.params.blueprintIdentifier}/license`,
    ],
    placeholder: app.spinner(`Loading ${route.params.blueprintIdentifier}`),
    success: ([blueprint, specification, readme, license]) => [
      app.float({
        left: [
          a.p(
            blueprint.publication ?
            app.publicationLabel(blueprint.publication) :
            app.placeholder('Not published'),
          ),
        ],
        right: [
          blueprint.publication ?
          app.button({
            label: app.icon('fas fa-file-import', 'Reimport'),
            onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/reimport`),
          }) : null,
        ],
      }),
      a.hr,
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
              (specification.about || {}).title || app.placeholder('No title')
            ]),
            a.p((specification.about || {}).explanation || app.placeholder('No explanation')),
          ]),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-drafting-compass', 'Design'),
            onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design`),
          }),
        ],
      }),
      app.blueprints.menu(route),
      a['div.border.border-1.p-1'](
        route.mount({
          routes: {
            '/?': () => app.md(readme),
            '/license': () => app.md(license),
            '/bindings/?*': app.blueprints.bindings(blueprint, specification),
          }
        })
      ),
      // a.hr,
      // blueprint, specification,
    ]
  }),
]