app.dashboard.menu = (router) => (a,x) => a['app-menu'](
  app.fetch({
      url: [
        '/api/arenas',
        '/api/blueprints',
        '/api/resolutions',
      ],
      placeholder: a['div.p-2'](app.spinner("Loading menu")),
      success: ([arenas, blueprints, resolutions], el) => {
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
          a['div.m-1']([
            app.float({
              left: a.h6('Arenas'),
              right: app.button({
                label: app.icon("fa fa-plus"),
                onclick: () => router.open(`/arenas/~new`),
                buttonTag: {
                  class: 'btn btn-sm app-btn mt-n2',
                  data: {
                    path: `/arenas/~new`,
                  }
                },
              }),
            }),
          ]),
          a['app-menu-buttons']([
            arenas.length
            ? arenas.map((arena) => app.button({
              label: app.icon("fa fa-caret-right", arena),
              onclick: () => router.open(`/arenas/${arena}`),
              buttonTag: {
                data: {
                  path: `/arenas/${arena}`,
                }
              }
            }))
            : app.placeholder('No arenas'),
          ]),
          a.hr,
          a['div.m-1']([
            app.float({
              left: a.h6('Blueprints'),
              right: app.button({
                label: app.icon("fa fa-plus"),
                onclick: () => router.open(`/blueprints/~new`),
                buttonTag: {
                  class: 'btn btn-sm app-btn mt-n2',
                  data: {
                    path: `/blueprints/~new`,
                  }
                },
              }),
            }),
          ]),
          a['app-menu-buttons']([
            blueprints.length
            ? blueprints.map((blueprint) => app.button({
              label: app.icon("fa fa-caret-right", blueprint),
              onclick: () => router.open(`/blueprints/${blueprint}`),
              buttonTag: {
                data: {
                  path: `/blueprints/${blueprint}`,
                }
              }
            }))
            : app.placeholder('No blueprints'),
          ]),
          a.hr,
          a['div.m-1']([
            app.float({
              left: a.h6('Resolutions'),
              right: app.button({
                label: app.icon("fa fa-plus"),
                onclick: () => router.open(`/resolutions/~new`),
                buttonTag: {
                  class: 'btn btn-sm app-btn mt-n2',
                  data: {
                    path: `/resolutions/~new`,
                  }
                },
              }),
            }),
          ]),
          a['app-menu-buttons']([
            resolutions.length
            ? a.div(resolutions.map((resolution) => app.button({
              label: app.icon("fa fa-caret-right", resolution),
              onclick: () => router.open(`/resolutions/${resolution}`),
              buttonTag: {
                data: {
                  path: `/resolutions/${resolution}`,
                }
              }
            })))
            : app.placeholder('No applications')
          ]),
          a.hr,
        ];
        dashboardMenu.$activate();
      }
    }),
  {
    id: 'dashboardMenu',
    $activate: (el) => () => {
      el.$$('button.active').classList.remove('active')
      let active = el.$(`[data-path="${location.pathname}"]`)
      if (active) {
        active.classList.add('active')
        if (!x.lib.element.visible(active)) active.scrollIntoView()
      }
    },
  },
)
