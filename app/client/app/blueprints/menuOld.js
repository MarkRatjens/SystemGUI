app.blueprints.menuOld = (route) => (a,x) => a['app-menu'](
  app.fetch({
      url: '/api/blueprints/list',
      placeholder: a['div.p-2'](app.spinner("Loading menu")),
      success: (blueprints =>
        a['app-menu-buttons.mt-1']([
          blueprints.map(
            blueprintIdentifier => a.p(app.button({
              label: [
                a.img([], {
                  src: `/api/blueprints/@${blueprintIdentifier}/icon/thumbnail`,
                  height: '24',
                  width: '24'
                }),
                ' ',
                blueprintIdentifier,
              ],
              onclick: () => {
                if (
                  window.location.pathname == `/blueprints/${blueprintIdentifier}`
                ) {
                  route.open('/blueprints')
                } else {
                  route.open(`/blueprints/${blueprintIdentifier}`)
                }
              },
              buttonTag: {
                data: {
                  path: `/blueprints/${blueprintIdentifier}`,
                }
              }
            })),
          ),
          a({
            $init: (el) => {
              blueprintsMenu.$activate();
            },
          })
        ])
      ),
    }),
  {
    id: 'blueprintsMenu',
    class: 'app-dynamic-menu',
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
