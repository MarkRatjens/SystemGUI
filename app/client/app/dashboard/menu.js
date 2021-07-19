app.dashboard.menu = (route) => (a,x) => a['app-menu#dashboardMenu.activateable']([], {

  $update: (el) => {
    if (el.$state == 'blueprints') {
      el.$nodes = [
        app.fetch({
          url: '/api/blueprints/list',
          placeholder: a['div.p-2'](app.spinner("Loading menu")),
          success: (blueprints =>
            a['app-menu-buttons.mt-1']([
              blueprints.map(
                blueprintIdentifier => a.div(
                  app.dashboard.menu.blueprint(route, blueprintIdentifier)
                ),
              ),
            ])
          ),
        }),
      ]
    } else {
      el.$nodes = [
        app.fetch({
          url: '/api/arenas',
          placeholder: a['div.p-2'](app.spinner("Loading menu")),
          success: (arenas =>
            a['app-menu-buttons.mt-1']([
              arenas.map(
                arena => a.p(
                  app.dashboard.menu.arena(route, arena)
                ),
              ),
            ])
          ),
        }),
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
