app.dashboard.menu.arenas.installations.installation = (route, installation) => (a,x) => {
  let [arenaIdentifier, blueprintIdentifier] = installation.identifier.split('::')

  return app.button({
    label: a['div.position-relative']([
      a['div.position-relative'](app.icon('fa fa-angle-right', blueprintIdentifier)),
      installation.stale ? a['div.position-absolute.error'](app.icon('fa fa-exclamation-circle'), {
        style: 'top:0px; right:0px;',
      }) : null,
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
        click: (el) => (e) => {
          route.open(`/arenas/@${arenaIdentifier}/@${blueprintIdentifier}`)
        },
      },
      $match: (el) => () => {
        return window.location.pathname.match(/^\/arenas\/@([\w\-]+)\/@([\w\-]+)/) || []
      }
    },
  })
}
