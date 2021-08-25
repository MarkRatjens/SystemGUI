app.blueprints.location = (route) => (a, x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/summary`,
    success: summary => [
      app.float({
        left: [
          a['div.mt-2.mb-2'](summary.location.exist ? app.locationLabel(summary.location) : app.placeholder('No location')),
        ],
        right: [
          route.mount({
            routes: {
              '/?': (route) => [
                a['.activatable']([
                  x.transition.fade({}),
                ], {
                  $state: false,
                  $update: (el, state) => {
                    el.$('ax-appkit-transition').$to(
                      (state && summary.location.exist) ? [
                        app.button({
                          label: app.icon('fas fa-file-import', 'Reimport'),
                          onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/reimport`),
                        })
                      ] : null
                    )
                  },
                  $init: (el) => el.$activate(),
                  $activate: (el) => () => {
                    if (
                      window.location.pathname
                      .replace(/^\/blueprints\/@[\w\-]+/, '')
                      .match(/^(?!\/reimport).*/)
                    ) {
                      el.$state = true
                    } else {
                      el.$state = false
                    }
                  }
                }),
              ],
              '/design/?*': (route) => [
                a['.activatable']([
                  x.transition.fade({}),
                ], {
                  $state: false,
                  $update: (el, state) => {
                    el.$('ax-appkit-transition').$to(
                      state ? [
                        summary.location.exist ? app.button({
                          label: app.icon("fas fa-file-export", "Export"),
                          onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/export`),
                        }) : null,
                        ' ',
                        app.button({
                          label: app.icon("fas fa-location-arrow", "Location"),
                          onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/location`),
                        })
                      ] : null
                    )
                  },
                  $init: (el) => el.$activate(),
                  $activate: (el) => () => {
                    if (
                      window.location.pathname
                      .replace(/^\/blueprints\/@[\w\-]+\/design/, '')
                      .match(/^(?!\/export).*/)
                    ) {
                      el.$state = true
                    } else {
                      el.$state = false
                    }
                  }
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
