app.dashboard.system.menu = (router) => (a,x) => a['app-menu'](
  [

    app.http({
      url: [
        '/api/arenas',
        '/api/blueprints',
      ],
      placeholder: a['div.p-2'](app.spinner("Loading menu")),
      success: ([arenas, blueprints], el) => {
        el.$nodes = [
          a['app-menu-buttons.mt-3']([
            app.button({
              label: app.icon("fas fa-server", "System"),
              onclick: () => router.open("/"),
              buttonTag: {
                data: {
                  path: '/',
                }
              }
            }),
          ]),
          a.hr,
          a['app-menu-buttons']([
            arenas.map(
              (arena) => app.button({
                label: app.icon("fa fa-caret-right", arena),
                onclick: () => router.open(`/arenas/${arena}`),
                buttonTag: {
                  data: {
                    path: `/arenas/${arena}`,
                  }
                }
              })
            ),
          ]),
          a.hr,
          a['app-menu-buttons'](
            [
              blueprints.length
              ? blueprints.map((blueprint) =>
              app.button({
                label: app.icon("fa fa-caret-right", blueprint),
                onclick: () => router.open(`/blueprints/${blueprint}`),
                buttonTag: {
                  data: {
                    path: `/blueprints/${blueprint}`,
                  }
                }
              }))
              : app.placeholder('No blueprints')
            ],
          ),
          a.hr,
        ];
        dashboardMenu.$activate();
      }
    }),

  ],
  {
    id: 'dashboardMenu',
    $activate: (el) => () => {
      el.$$('button.active').classList.remove('active')
      let active = el.$(`[data-path="${location.pathname.split('/')[0] || '/'}"]`)
       // || el.$(`[data-path="/"]`)
      console.log(location.pathname, active, el.$$('button').$$)
      if (active) active.classList.add('active')
    },
  },
)
