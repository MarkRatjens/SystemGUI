app.dashboard.menu.arenas.resolutions.resolution = (route, resolution) => {
  let [arenaIdentifier, blueprintIdentifier] = resolution.identifier.split('::')

  return app.button({
    label: a['div.position-relative']([
      a['div.position-relative'](
        app.icon('fa fa-angle-right', blueprintIdentifier)
      ),
      resolution.stale ? a['div.position-absolute.error'](app.icon('fa fa-exclamation-circle'), {
        style: 'top:0px; right:0px;',
      }) : '',
    ]),
    buttonTag: {
      $init: (el) => {
        setTimeout(el.$activate, 0)
      },
      $activate: (el) => () => {
        let match = el.$match()
        if (match[1] == arenaIdentifier && match[2] == blueprintIdentifier) {
          el.classList.add('active')
        } else {
          el.classList.remove('active')
        }
      },
      $on: {
        click: (e, el) => {
          route.open(`/arenas/@${arenaIdentifier}/@${blueprintIdentifier}`)
        },
      },
      $match: (el) => () => {
        return window.location.pathname.match(/^\/arenas\/@([\w\-]+)\/@([\w\-]+)/) || []
      }
    },
  })
}
