app.blueprints.location.show = (route, summary) => a.div([
  a['.activatable']([
    x.transition.fade({}),
  ], {
    $active: false,
    $update: (el) => (active) => {
      if (active && !el.$active) {
        el.$active = true
        el.$('ax-appkit-transition').$to(
          summary.location.exist ?
          app.button({
            label: app.icon('fas fa-file-import', 'Reimport'),
            onclick: (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/reimport`),
          })
          : ''
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
])
