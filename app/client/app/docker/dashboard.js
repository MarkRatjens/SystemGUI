app.docker.dashboard = (docker) => a['app-docker-dashboard.app-dashboard']([
  a['div.app-dashboard-item']([
    a['div.app-dashboard-item-panel']([
      a['div.app-dashboard-item-heading']([
        app.float({
          left: a['div.p-2.text-nowrap'](a.strong(docker.name)),
          right: a['div.p-2.text-nowrap'](a.small(docker.version)),
        }),
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
      app.docker.events(),
      app.docker.commands(),
      a['small']('Containers'),
      a['div.border-top'](app.docker.containers()),
      a['small']('Images'),
      a['div.border-top'](app.docker.images()),
    ]),
  ]),
], {
  $receive: (el) => (event) => {
    if (event.type == 'images') {
      el.$('app-docker-images').$reindex(event)
    } else if (event.type == 'container') {
      let containerEl = el.$(`#docker-container-${event.payload.identifier}`)
      if (containerEl) containerEl.$receive(event)
    } else if (event.type == 'containers') {
      el.$('app-docker-containers').$reindex(event)
    }
  },
})
