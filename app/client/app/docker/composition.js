app.docker.composition = (composition) => a['app-docker-composition.app-dashboard-item']({
  id: `docker-composition-${composition.id}`,
  $nodes: (el) => a['div.app-dashboard-item.border-bottom']([
    a['div.app-dashboard-item-panel']([
      a['div.app-dashboard-item-heading.p-2']([
        composition.identifier,
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
      app.docker.composition.commands(composition),
    ]),
    a['app-docker-composition-fetch']({
      $fetch: (el) => (path) => {
        el.$nodes = app.fetch({
          url: `/api/docker/compositions/@${composition.id}${path}`,
          success: () => '',
        })
      }
    }),
  ]),
})
