app.blueprints.location.design = (route, summary) => a.div([
  a['.activatable']([
    x.transition.fade({}),
  ], {
    $active: false,
    $update: (el) => (active) => {
      if (active && !el.$active) {
        el.$active = true
        el.$('ax-appkit-transition').$to(
          a.div([
            summary.location.exist ? app.button({
              label: app.icon("fas fa-file-export", "Export"),
              onclick: (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/export`),
            }) : '',
            ' ',
            app.button({
              label: app.icon("fas fa-location-arrow", "Location"),
              onclick: (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/location`),
            })
          ])
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
])
