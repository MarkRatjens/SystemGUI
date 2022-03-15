app.docker.prebuild = (prebuild) => a['app-docker-prebuild']([
  a['div.app-dashboard-item.border-bottom']([
    a['div.app-dashboard-item-panel']([
      a['div.app-dashboard-item-heading.p-2']([
        prebuild.split('::')[1],
      ], {
        $on: {
          click: (e) => {
            let commandsEl = e.currentTarget.$('^.app-dashboard-item .app-dashboard-item-commands')
            if (commandsEl.classList.contains('active')) {
              commandsEl.classList.remove('active')
            } else {
              commandsEl.classList.add('active')
            }
          },
        }
      }),
      app.docker.prebuild.commands(prebuild),
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
