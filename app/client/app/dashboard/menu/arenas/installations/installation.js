app.dashboard.menu.arenas.installations.installation = (route, identifier) => (a,x) => {
  let [arenaIdentifier, blueprintIdentifier] = identifier.split('::')

  return app.button({
    label: app.icon('fa fa-angle-right', blueprintIdentifier),
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
