app.dashboard.menu.arenas.arena = (route, identifier) => a['app-menu-arenas']([
  app.button({
    label: identifier,
    buttonTag: {
      $init: (el) => {
        setTimeout(el.$activate, 0)
      },
      $activate: (el) => () => {
        if (el.$match()[1] == identifier) {
          el.classList.add('active')
        } else {
          el.classList.remove('active')
        }
      },
      $on: {
        click: (e, el) => {
          route.open(`/arenas/@${identifier}`)
        },
      },
      $match: (el) => () => {
        return window.location.pathname.match(/^\/arenas\/@([\w\-]+)/) || []
      },
    }
  }),
  app.dashboard.menu.arenas.resolutions(route, identifier)
])
