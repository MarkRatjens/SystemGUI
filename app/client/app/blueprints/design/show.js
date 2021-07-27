app.blueprints.design.show = (route) => (a, x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}`,
    success: blueprint => [
      blueprint.publication ? [
        a.p(app.publicationLabel(blueprint.publication)),
        app.float({
          left: [
            app.button({
              label: app.icon("fas fa-file-export", "Export"),
              onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/export`),
            }),
            app.button({
              label: app.icon("fas fa-project-diagram", "Branch"),
              onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/branch`),
            }),
          ],
          right: [
            app.button({
              label: app.icon("fas fa-minus-square", "Unpublish"),
              onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/unpublish`),
            }),
          ],
        })
      ] :
      app.float({
        left: [
          app.placeholder('Not published'),
        ],
        right: [
          app.button({
            label: app.icon("fas fa-plus-square", "Publish"),
            onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/publish`),
          }),
        ],
      }),

      a.hr,
      a['div.mb-1'](app.blueprints.design.menu(route)),
      route.mount({
        routes: {
          '/icon/?*': app.blueprints.design.icon,
          '/readme/?*': app.blueprints.design.readme,
          '/license/?*': app.blueprints.design.license,
          '/form/?*': app.blueprints.design.form,
          '/files/?*': app.blueprints.design.files,
          '*': app.blueprints.design.specification,
        }
      }),

    ]
  }),
]
