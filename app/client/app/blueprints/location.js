app.blueprints.location = (route) => (a, x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/summary`,
    success: summary => [
      app.float({
        left: [
          a['div.mt-2.mb-2'](app.locationLabel(summary.location)),
        ],
        right: [
          route.mount({
            routes: {
              '/?': (route) => [
                a['.activatable']([
                  x.transition.fade({}),
                ], {
                  $active: false,
                  $update: (el) => (active) => {
                    if (active && !el.$active) {
                      el.$active = true
                      el.$('ax-appkit-transition').$to(
                        summary.location.exist ? [
                          app.button({
                            label: app.icon('fas fa-file-import', 'Reimport'),
                            onclick: (el) => (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/reimport`),
                          })
                        ] : null
                      )
                    } else if (!active) {
                      el.$active = false
                    }
                  },
                  $init: (el) => el.$activate(),
                  $activate: (el) => () => {
                    if (
                      window.location.pathname
                      .replace(/^\/blueprints\/@[\w\-]+/, '')
                      .match(/^(?!\/reimport).*/)
                    ) {
                      el.$update(true)
                    } else {
                      el.$update(false)
                    }
                  }
                }),
              ],
              '/design/?*': (route) => [
                a['.activatable']([
                  x.transition.fade({}),
                ], {
                  $active: false,
                  $update: (el) => (active) => {
                    if (active && !el.$active) {
                      el.$active = true
                      el.$('ax-appkit-transition').$to(
                        summary.location.exist ? [
                          summary.location.exist ? app.button({
                            label: app.icon("fas fa-file-export", "Export"),
                            onclick: (el) => (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/export`),
                          }) : null,
                          ' ',
                          app.button({
                            label: app.icon("fas fa-location-arrow", "Location"),
                            onclick: (el) => (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/location`),
                          })
                        ] : null
                      )
                    } else if (!active) {
                      el.$active = false
                    }
                  },
                  $init: (el) => el.$activate(),
                  $activate: (el) => () => {
                    if (
                      window.location.pathname
                      .replace(/^\/blueprints\/@[\w\-]+/, '')
                      .match(/^(?!\/reimport).*/)
                    ) {
                      el.$update(true)
                    } else {
                      el.$update(false)
                    }
                  },
                }),
              ],
              '*': null,
            }
          }),
        ],
      }),
    ]
  }),
]
