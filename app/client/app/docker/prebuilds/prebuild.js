app.docker.prebuilds.prebuild = (prebuild) =>
a['app-docker-prebuilds-prebuild.d-block']([
  a['div.app-dashboard-item.border-bottom']([
    a['div.app-dashboard-item-panel']([
      a['div.app-dashboard-item-heading.p-2']([
        prebuild.split('::')[1],
      ], {
        $on: {
          click: (e) => {
            let menuEl = e.currentTarget.$('^.app-dashboard-item .app-dashboard-item-menu')
            if (menuEl.classList.contains('active')) {
              menuEl.classList.remove('active')
            } else {
              menuEl.classList.add('active')
              menuEl.scrollIntoView({block: "center", behavior: 'smooth'});
            }
          },
        }
      }),
      app.docker.prebuilds.menu(prebuild),
    ]),
    a['app-docker-prebuilds-fetch']({
      $fetch: (el) => (path) => {
        el.$nodes = app.fetch({
          url: `/api/docker/prebuilds/@${prebuild}${path}`,
          success: () => '',
        })
      }
    }),
  ]),
])
