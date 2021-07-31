app.dashboard.menu = (route) => (a,x) => a['app-menu#dashboardMenu.activatable']([], {

  $update: (el) => {
    if (el.$state == 'blueprints') {
      el.$nodes = [
        app.dashboard.menu.blueprints(route)
      ]
    } else {
      el.$nodes = [
        app.dashboard.menu.arenas(route)
      ]
    }
  },
  $activate: (el) => () => {
    let view = window.location.pathname.match(/^[\/]?(\w+)?/)[1]
    if (view == 'blueprints') {
      if (!el.$state || el.$state == 'arenas') el.$state = 'blueprints'
    } else {
      if (!el.$state || el.$state == 'blueprints') el.$state = 'arenas'
    }

    el.$$('button').$activate()
  }
})
