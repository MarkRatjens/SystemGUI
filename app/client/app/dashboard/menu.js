app.dashboard.menu = (route) => (a,x) => a['app-menu#dashboardMenu.activatable']([], {
  $update: (el) => (view) => {
    if (view == 'blueprints') {
      el.$nodes = [
        app.dashboard.menu.blueprints(route)
      ]
    } else {
      el.$nodes = [
        app.dashboard.menu.arenas(route)
      ]
    }
  },
  $init: (el) => el.$activate(),
  $activate: (el) => () => {
    let view = window.location.pathname.match(/^[\/]?(\w+)?/)[1]
    if (view == 'blueprints') {
      el.$update('blueprints')
    } else {
      el.$update('arenas')
    }
    el.$$('button').$activate()
  }
})
