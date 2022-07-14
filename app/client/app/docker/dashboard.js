app.docker.dashboard = (docker) => a['app-docker-dashboard.app-dashboard']([
  a['div.app-dashboard-item']([
    a['div.app-dashboard-item-panel.mb-4']([
      a['div.app-dashboard-item-heading']([
        app.float({
          left: a['div.p-2.text-nowrap'](a.strong(docker.name)),
          right: a['div.p-2.text-nowrap'](a.small(docker.version)),
        }),
      ], {
        $on: {
          click: (e) => {
            let menuEl = e.currentTarget.$('^.app-dashboard-item .app-dashboard-item-menu')
            if (menuEl.classList.contains('active')) {
              menuEl.classList.remove('active')
            } else {
              menuEl.classList.add('active')
            }
          },
        }
      }),
      app.docker.events(),
      app.docker.menu(),
    ]),
  ]),
], {
  $receive: (el) => (event) => {
    if (event.type == 'images') {
      el.$('app-docker-images').$reindex(event)
    } else if (event.type == 'container') {
      let containerEl = el.$(`#app-docker-containers-container-${event.payload.identifier}`)
      if (containerEl) containerEl.$receive(event)
    } else if (event.type == 'containers') {
      el.$('app-docker-containers').$reindex(event)
    }
  },
})
