app.docker.prebuild = (prebuild) =>
a['app-docker-prebuild.d-block']([
  a['div.app-dashboard-item.border-bottom']([
    a['div.app-dashboard-item-panel']([
      a['div.app-dashboard-item-heading.p-2']([
        prebuild.split('::')[0].replace('$', ''),
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
      app.docker.prebuild.menu(prebuild),
    ]),
    a['app-docker-prebuild-fetch']({
      $fetch: (el) => (path) => {
        el.$nodes = app.fetch({
          url: `/api/docker/prebuilds/@${prebuild}${path}`,
          success: () => '',
        })
      }
    }),
  ]),
])
