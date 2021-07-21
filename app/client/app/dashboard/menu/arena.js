app.dashboard.menu.arena = (route, arena) => (a,x) => [
  app.button({
    label: arena.identifier,
    buttonTag: {
      $init: (el) => {
        setTimeout(el.$activate, 0)
      },
      $activate: (el) => () => {
        if (el.$match()[1] == arena.identifier) {
          el.classList.add('active')
        } else {
          el.classList.remove('active')
        }
      },
      $on: {
        click: (e, el) => {
          route.open(`/arenas/@${arena.identifier}`)
        },
      },
      $match: (el) => () => {
        return window.location.pathname.match(/^\/arenas\/@([\w\-]+)/) || []
      },
    }
  }),
  arena.installations.map(installationIdentifier => {
    let blueprintIdentifier = installationIdentifier.split('::')[1]

    return app.button({
      label: app.icon('fa fa-angle-right', blueprintIdentifier),
      buttonTag: {
        $init: (el) => {
          setTimeout(el.$activate, 0)
        },
        $activate: (el) => () => {
          let match = el.$match()
          if (match[1] == arena.identifier && match[2] == blueprintIdentifier) {
            el.classList.add('active')
          } else {
            el.classList.remove('active')
          }
        },
        $on: {
          click: (e, el) => {
            route.open(`/arenas/@${arena.identifier}/@${blueprintIdentifier}`)
          },
        },
        $match: (el) => () => {
          return window.location.pathname.match(/^\/arenas\/@([\w\-]+)\/@([\w\-]+)/) || []
        }
      },
    })
  }),
]
